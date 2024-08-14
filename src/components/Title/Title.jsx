import React from 'react';
import './Title.scss';
interface ITitle{
    content:string;
}
function Title({content}:ITitle) {
  return (
    <h1>{content}</h1>
  );
}

export default Title;
