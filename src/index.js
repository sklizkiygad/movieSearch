import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import store from "../src/Redux/storeRedux";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./Redux/storeRedux";
import {HashRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <HashRouter  >
        <Provider store={store}>
            <PersistGate  persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </HashRouter>,
    document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
