import React from "react";
import ReactDOM from "react-dom";

//Reacting page routes
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux"; //parent! gives us access to the redux store from within my app
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

//Defaults
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
