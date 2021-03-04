import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './redux/reducers';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // 변경
import configureStore from "./store";
import './index.css';

const store = configureStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,document.getElementById('root')
);