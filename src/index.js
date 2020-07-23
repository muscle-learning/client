import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/App';
import {IntlProvider} from "react-intl-redux";
import store, {persistor} from "./stores";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";



ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
