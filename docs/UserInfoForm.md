## USER INFO FORM

Create a form with input fields for a user's name, email, and password, and use TypeScript to ensure that the form only submits if all fields are filled out and the email is in the correct format.

#### Clarification questions

- Are there any rules for what makes a valid user's name?
- Are we taking a separate first and last name input?
- Do we require both first and last name?
- Does the user need to confirm their password?
- What should happen if the input fields don't have valid content? Do we throw an error? Do we show users an error message and prompt them to try again? Or do we want to individually verify the fields as they are being filled out and only disable submit button if it is all valid input values?
- What should we do on valid submit? Do we show an empty form or a new UI with a form submitted message?

#### Pseudocode

V1 where we show error message after submit for invalid values

- Use form tag with useRef to set a ref and an onSubmit method
  - create input for first and last name
  - create input for email with regex to validate
  - create input for password
  - create input for submit

V2 where we disable submit button for invalid values

- Use state to track & update input values when input triggers onChange
- Use useEffect to check if we have all valid inputs
- Enable submit button when all inputs are valid
