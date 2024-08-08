import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { TextBase } from './text-base'

const componentName: ComponentNameType = 'display'

@customElement([appPrefix, componentName].join('-'))
export class Display extends TextBase {
  render() {
    return html`<h1 class="${this.classes}" style="${this.ellipsisStyles}"><slot></slot></h1>`
  }

  static get styles() {
    return TextBase.getStyles('h1', componentName, DisplayStyles)
  }
}

const DisplayStyles = {
  fontSize: 56,
  margin: 0
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-display': Display
  }
}
