import { appPrefix } from '@kreattix/constants'
import { customElement } from 'lit/decorators.js'

import { Paragraph } from './paragraph'

@customElement([appPrefix, 'text'].join('-'))
export class Text extends Paragraph {}

declare global {
  interface HTMLElementTagNameMap {
    'kd-text': Text
  }
}
