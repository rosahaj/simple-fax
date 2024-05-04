// export type ErrorCode = 'INVALID_CREDENTIALS' | 'INVALID_FAX_NUMBER' | 'INSUFFICIENT_BALANCE' | 'INVALID_DOCUMENT' | 'INTERNAL_ERROR'
export enum ErrorCode {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidFaxNumber = 'INVALID_FAX_NUMBER',
  InsufficientBalance = 'INSUFFICIENT_BALANCE',
  FaultyDocument = 'FAULTY_DOCUMENT',
  InternalError = 'INTERNAL_ERROR',
  Other = 'OTHER',
}

export class SimpleFaxError extends Error {
  code: ErrorCode

  constructor(msg: string) {
    super(msg)

    switch (msg) {
      case 'Zugangsdaten falsch':
        this.code = ErrorCode.InvalidCredentials
        break

      case 'Keine gültige Faxnummer':
        this.code = ErrorCode.InvalidFaxNumber
        break

      case 'Guthaben reicht nicht aus':
        this.code = ErrorCode.InsufficientBalance
        break

      case 'Dokument fehlerhaft':
        this.code = ErrorCode.FaultyDocument
        break

      default:
        this.code = ErrorCode.Other
        break
    }

    Object.setPrototypeOf(this, SimpleFaxError.prototype)
  }
}
