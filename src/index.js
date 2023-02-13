import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import App from './App';

let store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {' '}
    <Provider store={strore}>
      <App />
    </Provider>
  </StrictMode>
);
