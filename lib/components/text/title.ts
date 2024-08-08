import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { TextBase } from './text-base'
import { TitleStyles } from './text.styles'

@customElement([appPrefix, ComponentName.Title].join('-'))
export class Title extends TextBase {
  render() {
    return html`<h3 class="${this.classes}"><slot></slot></h3>`
  }

  static get styles() {
    return TextBase.getStyles('h3', ComponentName.Title, TitleStyles)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-title': Title
  }
}
