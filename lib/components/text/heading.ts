import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { TextBase } from './text-base'
import { HeadingStyles } from './text.styles'

@customElement([appPrefix, ComponentName.Heading].join('-'))
export class Heading extends TextBase {
  render() {
    return html`<h2 class="${this.classes}"><slot></slot></h2>`
  }

  static get styles() {
    return TextBase.getStyles('h2', ComponentName.Heading, HeadingStyles)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-heading': Heading
  }
}
