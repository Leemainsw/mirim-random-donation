import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import user_reducer from "./reducer/reducer";

let store = createStore(
  user_reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
