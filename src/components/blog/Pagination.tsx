import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { LIST_LIMIT } from '@/lib/client';
import Link from 'next/link';

type Props = {
  totalCount: number;
  currentPage: number;
  paths?: string;
};

const TestPagination: React.FC<Props> = ({
  totalCount,
  currentPage,
  paths,
}) => {
  const lastPage = Math.ceil(totalCount / LIST_LIMIT);
  const paginatioButtons = [];
  const maxButtons = 2;
  const startPage = Math.max(1, currentPage - maxButtons + 1);
  const endPage = Math.min(lastPage, currentPage + maxButtons - 1);

  for (let page = startPage; page <= endPage; page++) {
    paginatioButtons.push(page);
  }
  // console.log(paths, totalCount, currentPage);
  return (
    <div className='flex items-center justify-center gap-2 my-8'>
      {currentPage !== 1 && (
        <Link
          href={`/blog${paths}page/${currentPage - 1}`}
          passHref
          className=''
        >
          <button className='inline-flex items-center justify-center whitespace-nowrap h-10 w-full'>
            <div className='flex gap-1'>
              <IoIosArrowBack color='gray' className='w-5 h-5' />
            </div>
          </button>
        </Link>
      )}
      <div className='flex items-center gap-3 px-4'>
        <div className='space-x-4'>
          {paginatioButtons.map((number) => (
            <Link href={`/blog${paths}page/${number}`} key={number}>
              <button
                key={number}
                className={`inline-flex items-center justify-center  text-md font-medium h-9 w-9 px-4 rounded ${
                  number === currentPage
                    ? ' bg-blue-500 text-gray-100 hover:bg-blue-400'
                    : 'bg-white text-blue-400 outline outline-gray-100 hover:bg-gray-200 hover:text-accent-foreground'
                }`}
              >
                {String(number)}
              </button>
            </Link>
          ))}
        </div>
      </div>
      {currentPage !== Math.ceil(totalCount / LIST_LIMIT) && (
        <Link
          href={`/blog${paths}page/${currentPage + 1}`}
          passHref
          className=''
        >
          <button className='items-center justify-center h-10 w-full'>
            <div className='flex gap-1'>
              <IoIosArrowForward color='gray' className='w-5 h-5' />
            </div>
          </button>
        </Link>
      )}
    </div>
  );
};

export default TestPagination;
