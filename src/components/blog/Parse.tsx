'use client';
import parse from 'html-react-parser';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

const Parse: React.FC<{ content: string }> = ({ content }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <div>{parse(content)}</div>;
};

export default Parse;
