import React from 'react';
import { FaReact } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaTerminal } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { LiaPython } from 'react-icons/lia';
import { RiJavaFill } from 'react-icons/ri';
import { TbBrandKotlin } from 'react-icons/tb';
import { SiPhp } from 'react-icons/si';

const ExtensionIcon: React.FC<{ props: string }> = ({ props }) => {
  if (!props.includes('.')) {
    return <FaTerminal size={20} className='text-gray-400' />;
  }
  const extension = props.split('.').slice(-1)[0];
  switch (extension) {
    case 'ts':
      return <TbBrandTypescript size={30} className='text-blue-400' />;
    case 'tsx':
      return <FaReact size={30} className='text-blue-400' />;
    case 'js':
      return <RiJavascriptFill size={30} className='text-yellow-400' />;
    case 'rb':
      return <DiRuby size={30} className='text-red-400' />;
    case 'py':
      return <LiaPython size={30} className='text-yellow-400' />;
    case 'java':
      return <RiJavaFill size={30} className='text-yellow-400' />;
    case 'kt':
      return <TbBrandKotlin size={30} className='text-orange-400' />;
    case 'php':
      return <SiPhp size={35} className='text-purple-600' />;
  }
};

export default ExtensionIcon;
