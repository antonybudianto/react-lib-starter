import React from 'react';
import classNames from 'classnames/bind';
import css from './MyHelloView.css';
import reactImg from './react.png';
// import bigImg from './big.jpg';

const cx = classNames.bind(css);

export const MyHelloView = props => (
  <div className={cx('hello-local', 'hello-global')}>
    <img className={cx('hello-img')} src={reactImg} alt="React" />
    {/* <img className={cx('hello-img')} src={bigImg} alt="React" /> */}
    <h1>HelloViewLib</h1>
    <div>{props.children}</div>
  </div>
);
