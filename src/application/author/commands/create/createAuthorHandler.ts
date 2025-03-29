//  APP
import { NextFunction, Request, Response } from "express";

//  SHARED
import { asyncHandler } from "../../../../shared/handlers/asyncHandler";

//  INFRASTRUCTURE
import { authorRepository } from "../../../../infrastructure/persistence/repositories";

//  DOMAIN
import ErrorAuthor from "../../../../domain/exceptions/errorsAuthor";
import Address from "../../../../domain/valueObjects/address";
import PhoneNumber from "../../../../domain/valueObjects/phoneNumber";
import AuthorId from "../../../../domain/valueObjects/authorId";

async function CreateAuthorCommandHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;
  
  const address = Address.Create(body?.Country, body?.State, body?.Street, body?.Zipcode);
  if (address == null) {
    throw ErrorAuthor.AddressWithBadFormat();
  }

  const phoneNumber = PhoneNumber.Create(body?.PhoneNumber)
  if (phoneNumber== null) {
    throw ErrorAuthor.PhoneNumberWithBadFormat();
  }

  await authorRepository.AddAsync({
    Id: AuthorId.Value,
    Name: body?.Name,
    Country: address.Country,
    State: address.State,
    Street: address.Street,
    Zipcode: address.Zipcode,
    PhoneNumber: phoneNumber.Value
  });

  res.status(201).json({ message: "Success creation" });
}

export default asyncHandler(CreateAuthorCommandHandler);