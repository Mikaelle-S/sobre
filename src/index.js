import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header'
import Image from './components/image'
import Contents from './components/contents'

ReactDOM.render(
  <div>
    <Header></Header>
    <Image></Image>
    <Contents></Contents>
  </div>,
  document.getElementById('root')
);
