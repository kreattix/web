import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { TextBase } from './text-base'

const componentName: ComponentNameType = 'paragraph'

@customElement([appPrefix, componentName].join('-'))
export class Paragraph extends TextBase {
  render() {
    return html`<p class="${this.classes}"><slot></slot></p>`
  }

  static get styles() {
    return TextBase.getStyles('p', componentName, ParagraphStyles)
  }
}

const ParagraphStyles = {
  fontSize: 16,
  margin: 0
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-paragraph': Paragraph
  }
}
