import { UUID } from "crypto";

export class AuthorDto{
    Id: UUID | string;
    Name: string;
    Country: string;
    State: string;
    Street: string;
    Zipcode: string;
    PhoneNumber: string;
}   