import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../src/App';
// import rootReducer from './reducers';

const store = configureStore(rootReducer);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);