import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./store/browserStorage";
import { debounce } from "debounce";

const store = configureStore({
  reducer: rootReducer,
  // here we restore the previously persisted state
  preloadedState: loadState(),
});

// here we subscribe to the store changes
store.subscribe(
  // we use debounce to save the state once each 800ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
