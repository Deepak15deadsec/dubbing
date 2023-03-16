import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css'
import "react-datepicker/dist/react-datepicker.css";
import AppContextProvider from "./context/appContext";
import { StoreProvider } from 'easy-peasy';
import { store } from "./store/easy-peasy";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <StoreProvider store={store}>
  <QueryClientProvider client={queryClient}>
    <Router>
      <AppContextProvider>
        <ProSidebarProvider>
          <App />
          <ToastContainer />
        </ProSidebarProvider>
      </AppContextProvider>

    </Router>
  </QueryClientProvider>
  </StoreProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
