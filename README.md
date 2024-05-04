# simple-fax-soap-client

Unofficial client for the [simple-fax.de SOAP API](https://simple-fax.de/Downloads/SOAP-API-simplefax.pdf)

> **Note:** The simple-fax.de SOAP API does not produce transmission reports and transmissions do not appear in the "Versandbox" tab.

## Usage

```ts
import { readFileSync } from 'node:fs'
import * as simpleFax from 'simple-fax-soap-client'

const base64EncodedPDF = fs.ReadFileSync('./document.pdf').toString('base64')

const options = {
  username: 'user@email.com',
  password: 'verysecurepassword',
  faxnumber: '080012345678',
  data: base64EncodedPDF,
  filetype: 'PDF',
  identifier: 'sender information',
  statusurl: 'https://callbackurl.com/',
}

const faxId = await simpleFax.sendFax(options)
console.log(`Fax ID: ${faxId}`)
```

## License

[MIT](./LICENSE) License © 2024 [rosahaj](https://github.com/rosahaj)
