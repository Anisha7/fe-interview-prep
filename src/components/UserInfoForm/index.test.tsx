import React from "react";
import { render } from "@testing-library/react";
import UserInfoForm from ".";
import { validateData, validateEmail } from "./helpers";

describe("UserInfoForm", () => {
  test("renders", () => {
    const { getByText, getByPlaceholderText } = render(<UserInfoForm />);
    expect(getByText("Submit form")).toBeTruthy();
    expect(getByPlaceholderText("First name")).toBeTruthy();
    expect(getByPlaceholderText("Last name")).toBeTruthy();
    expect(getByPlaceholderText("Email")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
  });
});

describe("Validate methods", () => {
  test("validateEmail validates email", () => {
    expect(validateEmail("abc")).toBe(false);
    expect(validateEmail("abc@")).toBe(false);
    expect(validateEmail("a")).toBe(false);
    expect(validateEmail("")).toBe(false);
    expect(validateEmail("anv@gmm")).toBe(false);
    expect(validateEmail("afe@gmaa.com")).toBe(true);
  });

  test("validateData validates data", () => {
    expect(
      validateData({
        firstName: "an",
        lastName: "ab",
        email: "anv@aff.com",
        password: "abscdgt",
      })
    ).toBe(true);
    try {
      validateData({
        firstName: "an",
        lastName: "ab",
        email: "anv@aff.com",
        password: "ad",
      });
    } catch (e: any) {
      expect(e.message).toBe("Please provide a password of atleast length 6");
    }
    try {
      validateData({
        firstName: "an",
        lastName: "ab",
        email: "anv@aff",
        password: "abscdgt",
      });
    } catch (e: any) {
      expect(e.message).toBe("Please provide a valid email");
    }
    try {
      validateData({
        firstName: "",
        lastName: "ab",
        email: "anv@aff.com",
        password: "abscdgt",
      });
    } catch (e: any) {
      expect(e.message).toBe("Please provide a full name");
    }
    try {
      validateData({
        firstName: "an",
        lastName: "",
        email: "anv@aff.com",
        password: "abscdgt",
      });
    } catch (e: any) {
      expect(e.message).toBe("Please provide a full name");
    }
  });
});
