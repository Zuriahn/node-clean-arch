import { checkSchema } from "express-validator";

const bodyValidator = checkSchema({
  Name: {
    exists: {
      errorMessage: "Field required",
    },
    isString: {
      errorMessage: "Type incorrect",
    },
  },
  Country: {
    exists: {
      errorMessage: "Field required",
    },
    isString: {
      errorMessage: "Type incorrect",
    },
  },
  State: {
    exists: {
      errorMessage: "Field required",
    },
    isString: {
      errorMessage: "Type incorrect",
    },
  },
  Street: {
    exists: {
      errorMessage: "Field required",
    },
    isString: {
      errorMessage: "Type incorrect",
    },
  },
  Zipcode: {
    exists: {
      errorMessage: "Field required",
    },
    isString: {
      errorMessage: "Type incorrect",
    },
  },
  PhoneNumber: {
    exists: {
      errorMessage: "Field required",
    },
    isString: {
      errorMessage: "Type incorrect",
    },
  },
});

export default bodyValidator;
