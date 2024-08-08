import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { TextBase } from './text-base'

const componentName: ComponentNameType = 'title'

@customElement([appPrefix, componentName].join('-'))
export class Title extends TextBase {
  render() {
    return html`<h3 class="${this.classes}"><slot></slot></h3>`
  }

  static get styles() {
    return TextBase.getStyles('h3', componentName, TitleStyles)
  }
}

const TitleStyles = {
  fontSize: 24,
  margin: 0
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-title': Title
  }
}
