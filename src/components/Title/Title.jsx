import React, { useContext } from 'react';
import './Title.scss';
import { ThemeContext } from '../../Providers/ThemeContext';
interface ITitle{
    content:string;
}
function Title({content}:ITitle) {
  const [color,setColor] = useContext(ThemeContext);

  return (
    <h1 className={`title-${color}`}>{content}</h1>
  );
}

export default Title;
