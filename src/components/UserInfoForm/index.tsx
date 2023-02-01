import React, { useRef, useState } from "react";
import { validateData, FormData } from "./helpers";

const UserInfoForm: React.FunctionComponent = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  let userInfoFormRef = useRef(null);
  const resetData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setError("");
  };
  const sendData = (data: FormData) => console.log(data);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: FormData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      validateData(data);
      sendData(data);
      resetData();
    } catch (err: any) {
      setError(`Error: ${err.message}`);
    }
  };
  return (
    <>
      <form ref={userInfoFormRef} onSubmit={onSubmit}>
        <input
          name="firstName"
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          name="lastName"
          type="text"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit form</button>
      </form>
      {error}
    </>
  );
};

export default UserInfoForm;
