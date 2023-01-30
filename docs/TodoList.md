## TODO LIST APP

Create a simple to-do list application using React and TypeScript. The application should have the ability to add new tasks, mark tasks as completed, and delete tasks.

#### Clarification questions

Questions:

- Will the tasks expire at any point?
- How will the tasks be prioritized?
- When a task is marked complete, can users mark it as incomplete again?
- If not, should the task be deleted automatically immediately or over a set time?
- Should a completed task be moved to the end of the list if we are not deleting them?

#### Pseudocode

- Set up redux store to store tasks and status (todo vs completed)
  - Store task name, and status (V2: store priority)
  - Create actions Add, Update, and Delete task
  - When Updating task to completed, move it to the end of list
- Persist store to local storage so it stays on reload
  - Create TODO Task List component
    - Get tasks from store
    - Map tasks to check box list items
    - Use store action Update when checkbox is selected to mark task as completed.
    - Disable checkbox for completed tasks
    - Create input text at the top of the list to add new task, mark priority by time created
      - Use ADD action to add the new task to store
      - Add an x icon next to the checkbox list item to allow deletion.
      - Use Delete action to delete the task
- Add tests
