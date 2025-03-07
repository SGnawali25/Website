import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

import { Provider } from 'react-redux';
import store from './store'
import {positions, transitions, Provider as AlertProvider} from'react-alert';
import AlertTemplate from'react-alert-template-basic';
import { GoogleOAuthProvider } from '@react-oauth/google'



const id = "672585097063-5g5e32qsvdgdt8prqh7av6rd3lp98v47.apps.googleusercontent.com";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <GoogleOAuthProvider clientId={id}>
        <App />
      </GoogleOAuthProvider>
    </AlertProvider>
  </Provider>,

  document.getElementById("root")
);
