# Persisted Redux Store

## Setting up the redux store

`npm install redux react-redux redux-thunk @reduxjs/toolkit`

`npm install -D @types/redux @types/react-redux @types/redux-thunk`

### File system

- Create folder `src/store`
- Create folder `store/actions`. We will use subfolders to store different actions here
- Create folder `store/reducers`.

For the purpose of this example, let's assume we are setting up a TODO list app. So create the following folders and files:

- In actions: `store/actions/todolist/index.ts` and `store/actions/todolist/types.ts`
- In reducers `store/reducers/todolist/index.ts`

Since we are using Typescript, we will also need to define ReduxState.

- Create file `store/ReduxState.ts`

### Actions/todolist

Initialize action types and state interface

```
// actions/todolist/types.ts

export const ADD_TASK = 'ADD_TASK';

export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
    dateCreated: Date;
}

type ActionPayloadType = {
  task: Task;
};

export type AddActionType = {
    type: string;
    payload: ActionPayloadType;
}
```

Initialize action methods using action types

```
// actions/todolist/index.ts

import {
  Task,
  ADD_TASK,
  AddActionType,
} from "./types";

export const addTask = (task: Task): AddActionType => {
  return {
    type: ADD_TASK,
    payload: {
      task,
    },
  };
};

export default {
  addTask,
};

```

### ReduxState

```
// store/ReduxState.ts

import { Task } from "./actions/todolist/types";
export interface ReduxState {
  task: Task[];
}
```

### Reducers/todolist

Initialize reducer method

```
// reducers/todolist/index.ts

import {
  ADD_TASK,
  Task,
} from "../../actions/todolist/types";

// Can use AnyAction for any action type
import { AnyAction } from "redux";

const defaultState: Array<Task> = [];

const TaskReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload.task];
    default:
      return state;
  }
};

export default TaskReducer;

```

### Connect reducers to app in App.tsx

```
import TaskReducer from "./store/reducers/todolist";

const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
});
```

Wrap app in Provider to pass in the store

```
function App() {
  return (
    <Provider store={store}>
      <YourApp>
    </Provider>
```

## Serving store to local storage

`npm i debounce @types/debounce`

### Local Storage methods

- Create file `store/browserStorage.ts` to hold our local storage methods

```
const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}

```

You can use different keys here to store different reducers to different keys

### Configure store to use localstorage

- Go to App.tsx and add these imports:

```
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { loadState, saveState } from "./store/browserStorage";
import { debounce } from "debounce";
```

- Add preloaded state to configureStore

```
const store = configureStore({
  reducer: rootReducer,
  // here we restore the previously persisted state
  preloadedState: loadState(),
});
```

- Upload store to local storage

```
// here we subscribe to the store changes
store.subscribe(
  // we use debounce to save the state once each 800ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    saveState(store.getState());
  }, 800)
);
```

And we're done! It should just work!

### Styled components

`npm install styled-components @types/styled-components`

Example implementation:

```
export const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: #131A22;
`
```
