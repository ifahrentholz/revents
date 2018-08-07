import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './app/store/configureStore';


const store = configureStore();
const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl);
}

// @ts-ignore
if(module.hot) {
  // @ts-ignore
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();
