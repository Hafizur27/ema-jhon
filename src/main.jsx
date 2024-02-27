import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./layout/Main/Main.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import AuthProvider from "./components/Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router}>
          <Main />
        </RouterProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
