import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import './common/styles/index.scss';
import store from 'src/store/store.ts';

{
  /* <React.StrictMode> */
}
{
  /* </React.StrictMode>, */
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
