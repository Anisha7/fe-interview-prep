export const validateEmail = (email: string): boolean =>
  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? true : false;

export const validateData = (data: FormData): boolean | Error => {
  if (!validateEmail(data.email)) {
    throw Error("Please provide a valid email");
  }
  if (data.firstName.length === 0 || data.lastName.length === 0) {
    throw Error("Please provide a full name");
  }
  if (data.password.length < 6) {
    throw Error("Please provide a password of atleast length 6");
  }
  return true;
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
