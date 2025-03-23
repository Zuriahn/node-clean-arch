import { randomUUID, UUID } from "crypto";

export interface IAuthorId {
    value: UUID
  }
  

class AuthorId {
    private readonly value: UUID;

    constructor(value?: UUID) {
        this.value = value ?? randomUUID();
    }

    get Value(): UUID {
        return this.value;
    }

    toString(): string {
        return this.value;
    }
}

export default new AuthorId();