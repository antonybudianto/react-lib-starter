import React from 'react';
import classNames from 'classnames/bind';
import css from './MyHelloView.css';

const cx = classNames.bind(css);

export const MyHelloView = props => (
  <div className={cx('hello-local', 'hello-global')}>
    <h1>HelloViewLib</h1>
    <div>{props.children}</div>
  </div>
);
