import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { TextBase } from './text-base'
import { ParagraphStyles } from './text.styles'

@customElement([appPrefix, ComponentName.Paragraph].join('-'))
export class Paragraph extends TextBase {
  render() {
    return html`<p class="${this.classes}"><slot></slot></p>`
  }

  static get styles() {
    return TextBase.getStyles('p', ComponentName.Paragraph, ParagraphStyles)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-paragraph': Paragraph
  }
}
