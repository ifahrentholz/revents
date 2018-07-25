import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';


const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(<App />, rootEl);
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
