import React from "react";
import AppRoutes from "@/routes/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

import reducers from '@/reducers'

import './App.scss'

(function createUuid() {
  const uuid = localStorage.getItem("uuid");
  if (!uuid) {
    FingerprintJS.load()
    .then(fp => {
      fp.get()
        .then(res => {
          localStorage.setItem("uuid", res.visitorId);
        })
    })
  }
})();

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));


function App() {

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
