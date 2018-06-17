import React from 'react';
import css from './MyHelloView.css';

export const MyHelloView = props => (
  <div className={css['my-hello-view']}>
    <h1>HelloViewLib</h1>
    <div>{props.children}</div>
  </div>
);
