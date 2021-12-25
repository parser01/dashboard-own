import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import StoreContext from './StoreContext';
// import { Provider } from 'react-redux';

const renderAllTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App state={state} />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderAllTree(store.getState());

store.subscribe(() => renderAllTree(store.getState()));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
