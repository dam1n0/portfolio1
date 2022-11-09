import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import { CookiesProvider } from "react-cookie"
import store from "./redux/redux-state";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </CookiesProvider>
    </React.StrictMode>
);

// https://reactdev.ru/libs/redux-toolkit/#_2
//https://www.cat-in-web.ru/10-ways-to-style-react/
reportWebVitals();
