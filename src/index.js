import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createReduxStore } from './redux';

//import { addCount } from "./store/counter/actions";

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
);