export interface IAddress {
  Country: string;
  State: string;
  Street: string;
  Zipcode: string;
}

class Address {
  Country: string;
  State: string;
  Street: string;
  Zipcode: string;

  constructor(
    country?: string,
    state?: string,
    street?: string,
    zipcode?: string
  ) {
    this.Country = country;
    this.State = state;
    this.Street = street;
    this.Zipcode = zipcode;
  }

  Create(country: string, state: string, street: string, zipcode: string) {
    if (!country || !state || !street || !zipcode) {
      return null;
    }
    return new Address(country, state, street, zipcode);
  }

  toString() {
    return `${this.Country}, ${this.State}, ${this.Street}, ${this.Zipcode}`;
  }
}

export default new Address();
