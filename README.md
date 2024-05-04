# simple-fax

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Unofficial client for the [simple-fax.de SOAP API](https://simple-fax.de/Downloads/SOAP-API-simplefax.pdf)

> **Note:** The simple-fax.de SOAP API does not produce transmission reports and transmission do not appear in the "Versandbox" tab.

## Usage

```ts
import { readFileSync } from 'node:fs'
import * as simpleFax from 'simple-fax'

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

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/simple-fax?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/simple-fax
[npm-downloads-src]: https://img.shields.io/npm/dm/pkg-placeholder?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/simple-fax
[bundle-src]: https://img.shields.io/bundlephobia/minzip/pkg-placeholder?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=simple-fax
[license-src]: https://img.shields.io/github/license/antfu/pkg-placeholder.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/rosahaj/simple-fax/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/simple-fax
