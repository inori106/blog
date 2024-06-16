import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className='container mx-auto px-4 md:px-6 py-8'>
        <div className='max-w-[800px] mx-auto bg-white p-6 rounded-lg'>
          <h1 className='mt-4 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl'>
            About
          </h1>
          <h2 className='mt-6 text-xl text-gray-600 dark:text-gray-400 border-b-2 border-gray-300 font-[600] text-[23px]'>
            プロフィール
          </h2>
          <div className='text-md py-4'>
            <p>20代のしがないサラリーマンです。IT系ではないです。</p>
            <p>理工系の大学を卒業しています。</p>
            <p>
              研究で少し機械学習を触りました。使用技術はPythonのPyTorchです。
            </p>
          </div>
          <h2 className='mt-6 text-xl text-gray-600 dark:text-gray-400 border-b-2 border-gray-300 font-[600] text-[23px]'>
            ブログについて
          </h2>
          <div className='text-md py-4'>
            <p>このブログはNext.jsとTailwind CSSを使って作成しています。</p>
            <p>
              ブログの内容は技術的なことから日常のことまで幅広く書いていきます。
            </p>
            <p>技術的なことは主にPythonとJavaScriptについて書いていきます。</p>
          </div>
          <h2 className='mt-6 text-xl text-gray-600 dark:text-gray-400 border-b-2 border-gray-300 font-[600] text-[23px]'>
            技術スタック
          </h2>
          <div className='text-md py-4'>
            <p>このブログは以下の技術を使用しています。</p>
            <ul className='list-disc list-inside'>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
