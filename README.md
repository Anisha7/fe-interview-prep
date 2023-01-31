# Frontend React + Typescript Interview Prep

In this repo, we will go over

- setting up the app with react + typescript
- setting up a store with redux + typescript
- saving store on localstorage to save user state on reload
- adding tests

## We will be completing the following challenges for practice:

1. Create a simple to-do list application using React and TypeScript. The application should have the ability to add new tasks, mark tasks as completed, and delete tasks.
2. Create a form with input fields for a user's name, email, and password, and use TypeScript to ensure that the form only submits if all fields are filled out and the email is in the correct format.
3. Create a game that allows a user to select a difficulty level (easy, medium, hard) and then generates a random number for the user to guess. Use TypeScript to ensure that the user can only select from the available difficulty levels.
4. Create a weather application that displays the current temperature and weather conditions for a given location. Use TypeScript to define the shape of the data returned from the weather API and to ensure that all required data is present before displaying it to the user.
5. Create a simple e-commerce application that allows a user to add items to a cart and then displays the total cost of the items in the cart. Use TypeScript to ensure that the total cost is always displayed in the correct format and that the user can only add items to the cart that are in stock.

## How to set up a new react + typescript app

### Set up a new react app

`npx create-react-app my-app --template typescript`

### Run app

In the file directory: `npm start`

### [How to set up redux]('https://github.com/Anisha7/fe-interview-prep/blob/main/docs/TodoList.md')

### How to initialize testing library

- Install the following:

`npm install --save-dev @testing-library/react`
`npm install --save-dev jest @types/jest @babel/preset-typescript`

- Create file babel.config.js

```
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [],
};
```

- Update the test script in package.json: `"test": "jest",`.
- Specify the testing environment at by creating file `jest.config.js` with:

```
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
  },
};
```

The moduleNameMapper is necessary to allow image and css imports. And create a file in your root folder called: `mocks/fileMock.js` and have it `export default "";`

- Now just create your test files and you're good to go! Add a sample test to `App.test.tsx` to test it out.
