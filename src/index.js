import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import STORE from './store';
import MAKE_GUESS from './src/actions';

console.log(STORE.getState())

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
