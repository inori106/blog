'use client';
import { useEffect } from 'react';
import * as tocbot from 'tocbot';
import '../../styles/TableofContents.css';

const ToC: React.FC = () => {
  useEffect(() => {
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
  return <nav className='toc' />;
};

export default ToC;
