import { appPrefix } from '@kreattix/constants'
import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { TextBase } from './text-base'

const componentName: ComponentNameType = 'label'

@customElement([appPrefix, componentName].join('-'))
export class Label extends TextBase {
  render() {
    return html`<label class="${this.classes}"><slot></slot></label>`
  }

  static get styles() {
    return TextBase.getStyles('label', componentName, LabelStyles)
  }
}

const LabelStyles = {
  fontSize: 14,
  margin: 0
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-label': Label
  }
}
