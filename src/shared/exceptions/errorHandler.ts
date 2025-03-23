export class ErrorHandler extends Error {
  code: number;
  msgServer?: string;
  msgError?: string;
  msgSchemaErrors?: string[];

  constructor(
    code: number,
    msgServer?: string,
    msgError?: string,
    msgSchemaErrors?: string[]
  ) {
    super(msgServer);
    this.code = code;
    this.msgServer = msgServer;
    this.msgError = msgError;
    this.msgSchemaErrors = msgSchemaErrors;
  }
}
