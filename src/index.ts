import { js2xml } from 'xml-js'
import type { Options } from 'ky'
import ky from 'ky'
import { SimpleFaxError } from './errors.js'
import type { EnvelopeOptions } from './types.js'
import template from './template.json'

/**
 * Creates XML string to be used as request body
 */
export function createEnvelope(options: EnvelopeOptions): string {
  const envelope = structuredClone(template)
  const elements = envelope.elements[0].elements[1].elements![0].elements

  elements.forEach(
    element =>
      (element.elements[0].text = (
        options as EnvelopeOptions & { [key: string]: string }
      )[element.name]),
  )

  return js2xml(envelope)
}

/**
 * Sends a fax using the simple-fax.de SOAP API
 *
 * Note: `data` needs to be a base64-encoded string
 *
 * Throws a `SimpleFaxError` if the simple-fax.de server responds with an error
 *
 * @param options API options
 * @param kyOptions Additional request options passed to ky
 * @returns FaxId
 */
export async function sendFax(
  options: EnvelopeOptions,
  kyOptions?: Options,
): Promise<string> {
  const envelope = createEnvelope(options)

  const response = await ky
    .post('http://longisland.simple-fax.de/soap/index.php', {
      ...kyOptions,
      body: envelope,
      headers: {
        ...kyOptions?.headers,
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': `"urn:soapservice#Service#sendfax"`,
      },
    })
    .text()

  // Response format: "status;message."
  const [status, message] = response.trim().replace(/\.$/, '').split(';')

  if (status === 'success')
    return message
  else throw new SimpleFaxError(message)
}
