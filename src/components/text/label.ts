import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils/constants'
import { Text } from './text'

const componentName: ComponentNameType = 'label'

@customElement([appPreffix, componentName].join('-'))
export class Label extends Text {
  render() {
    return html`<label class="${this.classes}"><slot /></label>`
  }

  static get styles() {
    return Text.getStyles('label', componentName, componentConfig[componentName])
  }
}
