import React from 'react';
import { render } from 'react-dom';
import Container from './Container.jsx';
import config from './config.json';
import { createStore } from 'redux'
import counter from './reducers';

const store = createStore(counter)
const rootEl = document.getElementById('root')
console.log(store.getState());
const myrender = () => render(
   < Container value={store.getState()} onClick={()=>{
        store.dispatch({ type: 'INCREMENT' })
    }}/ >,
  rootEl
)
myrender();
store.subscribe(myrender)