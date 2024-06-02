'use client';
import parse from 'html-react-parser';
import { useEffect } from 'react';
import Prism from 'prismjs';
import '../../styles/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import styles from '../../styles/BlogDetail.module.css';

const Parse: React.FC<{ content: string }> = ({ content }) => {
  useEffect(() => {
    const codeElements = document.querySelectorAll('[data-filename]');
    codeElements.forEach((codeElement) => {
      codeElement.classList.add(
        'rounded-md',
        'overflow-x-auto',
        '....',
        'border',
        'border-gray-200',
        'dark:border-gray-800',
        'my-3'
      );
      const filename = codeElement.getAttribute('data-filename');
      const spanElement = document.createElement('span');
      spanElement.textContent = filename;
      spanElement.className = 'code-block-filename';
      spanElement.classList.add(
        'bg-gray-100',
        'text-gray-600',
        'text-md',
        'font-semibold',
        'px-4',
        'py-4',
        'w-full',
        'block',
        'dark:bg-[#000000]',
        'dark:text-gray-300'
      );
      codeElement.prepend(spanElement);
    });
    Prism.highlightAll();
  }, []);
  return <div className={styles.content}>{parse(content)}</div>;
};

export default Parse;
