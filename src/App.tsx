import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { loadState, saveState } from "./store/browserStorage";
import { debounce } from "debounce";
import TodoListApp from "./components/TodoListApp";
import TaskReducer from "./store/reducers/todolist";

const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
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
