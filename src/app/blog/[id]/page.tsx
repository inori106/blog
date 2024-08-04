import { getdetail } from '@/lib/client';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import Prism from 'prismjs';
import '@/styles/code.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-powershell';
import * as cheerio from 'cheerio';
import fetcher from 'meta-fetcher';
import styles from '@/styles/parse.module.css';
import ExtensionIcon from '@/components/blog/ExtensionIcon';
import CopyButton from '@/components/blog/CopyButton';
import dayjs from 'dayjs';
import ToC from '@/components/blog/ToC';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = await getdetail(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}

async function MetaFetcher(url: string) {
  const res = await fetcher(url);
  if (!res) {
    throw new Error('MetaFetcher Error');
  }
  return res;
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getdetail(params.id);

  if (!article) {
    return <div>no article</div>;
  }
  const create = dayjs(article.publishedAt).format('YYYY-MM-DD');
  const update = dayjs(article.updatedAt).format('YYYY-MM-DD');

  const prism = Prism;
  const Article = article.content;

  const $ = cheerio.load(Article, { xmlMode: true });
  const codes: string[] = [];
  const datafiles: string[] = [];
  const $codes = $('code[class^="language-"]');
  if ($codes.length > 0) {
    $codes.each(function () {
      const $code = $(this);
      const lang = $code.attr('class')?.replace('language-', '') ?? '';
      const code = $code.text();
      codes.push(code);
      $code.html(prism.highlight(code, prism.languages[lang], code));
    });
  }
  $('div').each((i, el) => {
    const filename = $(el).attr('data-filename') as string;
    datafiles.push(filename);

    if (filename) {
      $(el).addClass(
        'border-2 border-gray-200 rounded-md dark:border-[#111111]'
      );
      $(el).prepend(
        `<div className='flex items-center justify-between bg-gray-200 p-2 dark:bg-[#000000]'><div className='flex items-center space-x-2 boreder border-gray-200'><span class='icon'>アイコン</span><p className='dark:text-gray-200 font-semibold'>${filename}</p></div><button className='text-sm bg-gray-600 rounded-md p-2'>Copy</button></div>`
      );
      $('pre').addClass(`p-2 dark:bg-[#111111]`);
    }
  });
  const divcode = $('pre').parent().parent();
  divcode.addClass('border-2 border-gray-200 dark:border-[#111111]');
  const Links: string[] = [];
  $('a').each((_, link) => {
    const hrefs = $(link).attr('href') as string;
    Links.push(hrefs);
  });

  const MetaDatas = await Promise.all(
    Links.map(async (link) => {
      const meta = await MetaFetcher(link);
      return meta;
    })
  );

  $('a').each((i, el) => {
    const href = MetaDatas[i].metadata.website.replace(/(https:\/\/|\/$)/g, '');
    $(el).replaceWith(
      `<div className='border-2 items-center px-2 py-4 hover:bg-gray-100  dark:bg-gray-200 dark:hover:bg-gray-300'><a href=${
        MetaDatas[i].metadata.website ?? ''
      } target=_blank><div className='flex items-center space-x-2'><img src=${
        MetaDatas[i].favicons[0]
      } alt='' className='w-10 h-10'/><p className='text-xl font-bold'>${
        MetaDatas[i].metadata.title ?? ''
      }</p></div><p className='pl-12 text-lg font-semibold'>${
        href ?? ''
      }</p></a></div>`
    );
  });

  let i: number = -1;
  let j: number = -1;
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === 'tag') {
        if (domNode.name === 'span' && domNode.attribs.class === 'icon') {
          j++;
          return <ExtensionIcon props={datafiles[j]} />;
        }
        if (domNode.name === 'button') {
          i++;
          return <CopyButton code={codes[i]} />;
        }
      }
    },
  };

  const HTML = $.html();

  return (
    <>
      <div className='px-4 md:px-6 2xl:px-80 3xl:px-80 lg:flex gap-5 py-8 min-h-screen justify-between'>
        <div className='lg:w-8/12 bg-white dark:bg-gray-900 sm:p-12 p-3 rounded-xl shadow-md'>
          <div>
            <section>
              <div>
                <div className='max-w-3xl'>
                  <div className='space-y-5 pb-8'>
                    <h1 className='text-[30px] font-bold tracking-tight dark:text-gray-50'>
                      {article.title}
                    </h1>
                    <div className='md:flex  items-center text-gray-500 dark:text-gray-400 md:space-x-4'>
                      <div className=''>投稿日 {create}</div>
                      {update && (
                        <div>
                          <p className=''>更新日 {update}</p>
                        </div>
                      )}
                    </div>
                    {article.categories && (
                      <div className='space-x-2'>
                        {article.categories.map((category) => (
                          <span
                            className='px-2 py-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-md'
                            key={category.id}
                          >
                            {category.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className='text-[20px]  dark:text-[#ededed]'>
                    {article.description}
                  </p>
                </div>
              </div>
            </section>
            <div className={styles.content}>{parse(HTML, options)}</div>
          </div>
        </div>
        <div className='lg:w-3/12 bg-white p-6 rounded-lg h-min sticky top-24 hidden lg:block dark:bg-gray-900 shadow-md'>
          <h2 className='text-2xl font-bold dark:text-gray-50 mb-2'>目次</h2>
          <ToC code={article.content} />
        </div>
      </div>
    </>
  );
}
