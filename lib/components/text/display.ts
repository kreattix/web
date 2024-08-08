import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { TextBase } from './text-base'
import { DisplayStyles } from './text.styles'

@customElement([appPrefix, ComponentName.Display].join('-'))
export class Display extends TextBase {
  render() {
    return html`<h1 class="${this.classes}" style="${this.ellipsisStyles}"><slot></slot></h1>`
  }

  static get styles() {
    return TextBase.getStyles('h1', ComponentName.Display, DisplayStyles)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-display': Display
  }
}
