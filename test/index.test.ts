import { describe, expect, it } from 'vitest'
import { createEnvelope } from '../src'
import type { EnvelopeOptions } from '../src/types'

describe('envelope', () => {
  it('is valid', () => {
    const options: EnvelopeOptions = {
      username: 'username',
      password: 'password',
      faxnumber: 'faxnumber',
      data: 'data',
      filetype: 'PDF',
      identifier: 'identifier',
      statusurl: 'statusurl',
    }

    const xml = createEnvelope(options)

    expect(xml).toMatchSnapshot()

    expect(xml).toContain(
      `<username xsi:type="xsd:string">${options.username}</username>`,
    )
    expect(xml).toContain(
      `<password xsi:type="xsd:string">${options.password}</password>`,
    )
    expect(xml).toContain(
      `<faxnumber xsi:type="xsd:string">${options.faxnumber}</faxnumber>`,
    )
    expect(xml).toContain(`<data xsi:type="xsd:string">${options.data}</data>`)
    expect(xml).toContain(
      `<filetype xsi:type="xsd:string">${options.filetype}</filetype>`,
    )
    expect(xml).toContain(
      `<statusurl xsi:type="xsd:string">${options.statusurl}</statusurl>`,
    )
  })
})
