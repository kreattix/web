import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { TextBase } from './text-base'

const componentName: ComponentNameType = 'heading'

@customElement([appPrefix, componentName].join('-'))
export class Heading extends TextBase {
  render() {
    return html`<h2 class="${this.classes}"><slot></slot></h2>`
  }

  static get styles() {
    return TextBase.getStyles('h2', componentName, HeadingStyles)
  }
}

const HeadingStyles = {
  fontSize: 36,
  margin: 0
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-heading': Heading
  }
}
