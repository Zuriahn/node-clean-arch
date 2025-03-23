export interface IPhoneNumber {
  Value: string;
}

class PhoneNumber {
  Value: string;
  #regex = "^+?52s?(d{2,3})s?d{4}s?d{4}$";
  #defaultLength = 12;

  constructor(value?: string) {
    this.Value = value;
  }

  Create(value: string) {
    if (!value.match(this.#regex) || value.length != this.#defaultLength) {
      return null;
    }
    return new PhoneNumber(value);
  }
}

export default new PhoneNumber();
