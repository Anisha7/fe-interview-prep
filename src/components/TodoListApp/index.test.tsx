import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import TodoListApp from "./";
import { AddTaskItem, TaskListItem } from "./helpers";
import reducer from "../../store/reducers";
import { configureStore } from "@reduxjs/toolkit";

const mockTask = {
  title: "title",
  id: 0,
  isCompleted: false,
  dateCreated: Date.now(),
};
const mockStore = configureStore({
  reducer: reducer,
  preloadedState: {
    task: [mockTask],
  },
});

describe("AddTaskItem", () => {
  test("renders", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={mockStore}>
        <AddTaskItem totalTasks={1} />
      </Provider>
    );
    expect(getByText("Add")).toBeTruthy();
    expect(getByPlaceholderText("Enter new task")).toBeTruthy();
  });
});

describe("TaskListItem", () => {
  test("renders", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <TaskListItem task={mockTask} />
      </Provider>
    );
    expect(getByText(mockTask.title)).toBeTruthy();
    expect(getByText("x")).toBeTruthy();
  });
});

describe("TodoListApp", () => {
  test("", async () => {
    const { getAllByText } = render(
      <Provider store={mockStore}>
        <TodoListApp />
      </Provider>
    );
    expect(getAllByText("x")).toHaveLength(1);
    expect(getAllByText("Add")).toHaveLength(1);
  });
});
