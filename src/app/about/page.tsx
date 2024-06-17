import Link from 'next/link';

const h2style =
  'mt-6 text-2xl dark:text-gray-50 border-b-2 border-gray-300 font-bold';
const h3style = 'text-xl font-semibold';
const divstyle = 'text-[17px] py-4 dark:text-[#EDEDED]';
export default function AboutPage() {
  return (
    <>
      <div className='container mx-auto px-4 lg:px-0 py-8'>
        <div className='flex flex-col items-center text-center max-w-[760px] mx-auto'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl'>
            About
          </h1>
          <p className='mt-6 text-xl dark:text-[#EDEDED] mb-4'>
            管理人と当ブログについてご紹介します<br></br>
            何かあれば
            <Link
              href='/contact'
              className='border-b-2 border-blue-500 text-blue-500'
            >
              お問い合わせ
            </Link>
            ください
          </p>
        </div>
        <div className='bg-white dark:bg-gray-900 rounded-lg py-4 px-4 sm:px-8 max-w-[760px] mx-auto shadow-lg'>
          <h2 className={h2style}>プロフィール</h2>
          <ul className='list-disc list-inside pl-2 text-[17px] mt-4 dark:text-[#EDEDED]'>
            <li>理工系大学卒業(情報系ではない)</li>
            <li>現在はしがない20代のサラリーマン(IT系ではない)</li>
            <li>趣味はプログラミング、ポケモン、遊戯王</li>
          </ul>

          <h2 className={h2style}>ブログについて</h2>
          <div className={divstyle}>
            <h3 className={h3style}>当サイトの技術スタック</h3>
            <ul className='sm:ml-2 list-disc list-inside py-2'>
              <li>フロント：Next.js(TypeScript)</li>
              <li>CMS：microCMS</li>
              <li>スタイリング：Tailwindcss+CSS module</li>
            </ul>
            <p>
              当ブログにログイン、コメント機能などを追加していきたいと思いますがいつになることやら...
            </p>
            <h3 className={`${h3style} mt-4`}>執筆目的</h3>
            <div className={divstyle}>
              <p>
                文章を作成する練習になればいいなと思っています。それとアドセンスが少しでも稼げれば幸いです。
              </p>
              <h3 className={`${h3style} py-4`}>コンテンツについて</h3>
              <p>
                主にプログラミングについて投稿していこうと考えていますが趣味や資格についても執筆しいていきたいです。
              </p>
            </div>
          </div>
          <h2 className={h2style}>管理人の技術</h2>
          <div className={divstyle}>
            <table className='table-auto w-full mb-4'>
              <tbody>
                <tr>
                  <td className='border px-4 py-2 w-1/2'>言語</td>
                  <td className='border px-4 py-2 w-1/2'>
                    TypeScript/JavaScript, Python, HTML/CSS, C
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>フロントエンド</td>
                  <td className='border px-4 py-2'>Next.js, React</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>バックエンド</td>
                  <td className='border px-4 py-2'>Jango</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>データベース</td>
                  <td className='border px-4 py-2'>Supabase</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>機械学習</td>
                  <td className='border px-4 py-2'>PyTorch</td>
                </tr>
              </tbody>
            </table>
            <p>
              フロントはNext.jsしかできないので他のフレイムワークも触っていきたいです。
            </p>
            <p>
              バックエンドはJangoを触ったことはありますが、数年前に挫折してそれ以来バックエンドを触っていません。これからExpressやHonoも勉強していきたいです。
            </p>
            <p>管理人は技術力が低いのでこれからも研鑽していきます。</p>
          </div>
        </div>
      </div>
    </>
  );
}
