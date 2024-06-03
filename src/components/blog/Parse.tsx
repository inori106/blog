'use client';
import parse, {
  Element,
  HTMLReactParserOptions,
  domToReact,
  DOMNode,
  Text,
} from 'html-react-parser';
import { useState, useEffect } from 'react';
import { IoIosCopy } from 'react-icons/io';
import { IoCheckmark } from 'react-icons/io5';
import ExtensionIcon from './ExtensionIcon';
import styles from '../../styles/BlogDetail.module.css';
import Prism from 'prismjs';
import '../../styles/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';

const Parse: React.FC<{ content: string }> = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === 'tag' && domNode) {
        if (domNode.name === 'div' && 'pre' && 'code') {
          const data_filename = domNode.attribs['data-filename'];
          const div = domNode.children[0] as Element;
          const pre = div.children[0] as Element;
          const code = pre.children[0] as Text;
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
                  <IoCheckmark
                    size={30}
                    className='text-gray-600 dark:text-gray-300'
                  />
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
              {domToReact(domNode.children as DOMNode[], options)}
            </div>
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
  }, []);
  return <div className={styles.content}>{parse(content, options)}</div>;
};

export default Parse;
