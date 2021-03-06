import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import {ArticleContextProvider} from "./context/ArcticleContext";
import { StyledEngineProvider } from '@mui/material/styles';
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <AuthContextProvider>
        <ArticleContextProvider>
        <StyledEngineProvider injectFirst>
          <App />
          </StyledEngineProvider>
        </ArticleContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
