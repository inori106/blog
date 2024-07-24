'use client';
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

const Parse: React.FC<{ content: string }> = ({ content }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === 'tag' && domNode) {
        if (domNode.name === 'div') {
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
  }, []);
  return <div className={styles.content}>{parse(content, options)}</div>;
};

export default Parse;
