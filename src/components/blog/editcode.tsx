import { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { IoIosCopy } from 'react-icons/io';
import ExtensionIcon from './ExtensionIcon';
import { domToReact, DOMNode, HTMLReactParserOptions } from 'html-react-parser';
type Props = {
  data_filename: string;
  code: {
    data: string;
  };
  children: DOMNode[];
  options: HTMLReactParserOptions;
};
const EditCode: React.FC<Props> = ({
  data_filename,
  code,
  options,
  children,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className='rounded-md ... overflow-x-auto border border-gray-200 dark:border-gray-800'>
      <div
        className='flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-[#000000] dark:text-gray-300'
        data-filename={data_filename}
      >
        <span className='text-gray-600 dark:text-gray-400 flex items-center space-x-2'>
          <ExtensionIcon props={data_filename} />
          <p>{data_filename}</p>
        </span>
        {isCopied ? (
          <IoCheckmark size={30} className='text-gray-600 dark:text-gray-300' />
        ) : (
          <IoIosCopy
            size={30}
            className='text-gray-600 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400'
            onClick={() => {
              navigator.clipboard.writeText(code.data as string);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
          />
        )}
      </div>
      {domToReact(children as DOMNode[], options)}
    </div>
  );
};
export default EditCode;
