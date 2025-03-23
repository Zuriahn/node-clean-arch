import { ErrorHandler } from "../../shared/exceptions/errorHandler";

class ErrorAuthor {
  AddressWithBadFormat() {
    return new ErrorHandler(
      409,
      "Error validator",
      "Field Address is not valid",
      null
    );
  }

  PhoneNumberWithBadFormat() {
    return new ErrorHandler(
      409,
      "Error validator",
      "Field PhoneNumber is not valid",
      null
    );
  }
}

export default new ErrorAuthor();
