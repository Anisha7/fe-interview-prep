import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { loadState, saveState } from "./store/browserStorage";
import { debounce } from "debounce";
import TodoListApp from "./components/TodoListApp";
import reducer from "./store/reducers";
import "./App.css";

const store = configureStore({
  reducer: reducer,
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
      <TodoListApp />
    </Provider>
  );
}

export default App;
