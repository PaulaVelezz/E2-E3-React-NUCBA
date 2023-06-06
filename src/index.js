import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';

import { GlobalStyles } from './styles/GlobalStyles';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyles />
          <App /> 
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </>
);