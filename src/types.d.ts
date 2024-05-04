export type EnvelopeFiletype = 'PS' | 'PDF'

export interface EnvelopeOptions {
  /**
   * Email address
   */
  username: string
  /**
   * Password
   */
  password: string
  /**
   * Recipient fax number
   */
  faxnumber: string
  /**
   * Base64-encoded PDF or PS document
   */
  data: string
  /**
   * Either "PDF" or "PS"
   */
  filetype: EnvelopeFiletype
  /**
   * Sender information (included in fax header)
   */
  identifier: string
  /**
   * Callback URL
   *
   * After transmission, a `GET` request with the following parameters is sent to the callback URL:
   * - `faxid` (internal suid rather than the fax ID displayed in the "Versandbox")
   * - `status` (either "done" or "failed")
   * - `reason` (error message)
   * - `timestamp` (unix timestamp in seconds)
   * - `totpages` (number of pages)
   * - `tsi` (unknown parameter)
   * - `number` (recipient fax number)
   * - `price` (price in `-x.xx` format)
   */
  statusurl: string
}
