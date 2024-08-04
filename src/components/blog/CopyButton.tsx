'use client';
import { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { IoIosCopy } from 'react-icons/io';

type Props = {
  code: string;
};
const CopyButton: React.FC<Props> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <>
      {isCopied ? (
        <IoCheckmark size={30} className='text-gray-600 dark:text-gray-300' />
      ) : (
        <IoIosCopy
          size={30}
          className='text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400'
          onClick={() => {
            navigator.clipboard.writeText(code as string);
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          }}
        />
      )}
    </>
  );
};
export default CopyButton;
