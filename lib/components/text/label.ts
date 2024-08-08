import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { TextBase } from './text-base'
import { LabelStyles } from './text.styles'

@customElement([appPrefix, ComponentName.Label].join('-'))
export class Label extends TextBase {
  render() {
    return html`<label class="${this.classes}"><slot></slot></label>`
  }

  static get styles() {
    return TextBase.getStyles('label', ComponentName.Label, LabelStyles)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-label': Label
  }
}
