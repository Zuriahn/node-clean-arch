import { IAddress } from "../valueObjects/address";
import { IPhoneNumber } from "../valueObjects/phoneNumber";
import { IAuthorId } from "../valueObjects/authorId";

export class Author {
  Id: IAuthorId;
  Name: string;
  Address: IAddress;
  PhoneNumber: IPhoneNumber;

  constructor(id, name, address, phoneNumber) {
    this.Id = id;
    this.Name = name;
    this.Address = address;
    this.PhoneNumber = phoneNumber;
  }
}
