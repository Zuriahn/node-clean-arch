import { FieldValidationError, ValidationError } from "express-validator";

export function formatValidationErrors(errors: ValidationError[]) {
  // console.log(errors?.filter((item: FieldValidationError) => item.path == "Name"));
  const arrMsg: string[] = [];
  errors?.forEach((item) => {
    const { msg } = item;
    const path = (item as any).path;
    const value = (item as any).value;
    const location = (item as any).location;
    arrMsg.push(`${path} return error of: ${msg}`);
  });
  return arrMsg;
}
