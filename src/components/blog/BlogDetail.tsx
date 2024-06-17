'use client';
import { Blog } from '@/types/blog';
import dayjs from 'dayjs';

import parse, {
  Element,
  HTMLReactParserOptions,
  domToReact,
  DOMNode,
  Text,
} from 'html-react-parser';
import { useEffect } from 'react';
import styles from '../../styles/parse.module.css';
import Prism from 'prismjs';
import '../../styles/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import EditCode from './editcode';
import * as tocbot from 'tocbot';
import '../../styles/TableofContents.css';

type Props = Blog;
const BlogDetail: React.FC<Props> = ({
  title,
  content,
  createdAt,
  updatedAt,
  description,
  categories,
}) => {
  const create = dayjs(createdAt).format('YYYY-MM-DD');
  const update = dayjs(updatedAt).format('YYYY-MM-DD');

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === 'tag' && domNode) {
        if (domNode.name === 'div' && 'pre' && 'code') {
          const data_filename = domNode.attribs['data-filename'];
          const div = domNode.children[0] as Element;
          const pre = div.children[0] as Element;
          const code = pre.children[0] as Text;
          return (
            <EditCode
              data_filename={data_filename}
              code={{ data: code.data }}
              domNode={{ children: domNode.children as DOMNode[] }}
              options={options}
            />
          );
        } else if (domNode.name === 'pre') {
          return (
            <pre suppressHydrationWarning>
              {domToReact(domNode.children as DOMNode[], options)}
            </pre>
          );
        }
      }
    },
  };

  useEffect(() => {
    Prism.highlightAll();
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.parse_content__TiGjU',
      headingSelector: 'h2, h3',
      headingsOffset: 100,
      scrollSmoothOffset: -80,
      scrollSmooth: true,
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <div className='px-4 md:px-6 2xl:px-64 3xl:px-80 lg:flex gap-3 py-8 min-h-screen justify-between space-y-6 lg:space-y-0 shadow-md'>
      <div className='lg:w-2/3 bg-white dark:bg-gray-900 sm:p-12 p-3 rounded-xl shadow-md'>
        <section>
          <div>
            <div className='max-w-3xl'>
              <div className='space-y-5 pb-8'>
                <h1 className='text-[30px] font-bold tracking-tight dark:text-gray-50'>
                  {title}
                </h1>
                <div className='md:flex  items-center text-gray-500 dark:text-gray-400 md:space-x-4'>
                  <div className=''>投稿日 {create}</div>
                  {update && (
                    <div>
                      <p className=''>更新日 {update}</p>
                    </div>
                  )}
                </div>
                {categories && (
                  <div className='space-x-2'>
                    {categories.map((category) => (
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
              <p className='text-[20px]  dark:text-[#ededed]'>{description}</p>
            </div>
          </div>
        </section>
        <div className='prose prose-gray dark:prose-invert max-w-none'>
          <div className={styles.content}>{parse(content, options)}</div>
        </div>
      </div>
      <div className='lg:w-96 bg-white p-6 rounded-lg h-min sticky top-24 hidden lg:block dark:bg-gray-900 shadow-md'>
        <h2 className='text-2xl font-bold dark:text-gray-50 mb-2'>目次</h2>
        <nav className='toc'></nav>
      </div>
    </div>
  );
};

export default BlogDetail;
