import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils/constants'
import { Text } from './text'

const componentName: ComponentNameType = 'display'

@customElement([appPreffix, componentName].join('-'))
export class Display extends Text {
  render() {
    return html`<h1 class="${this.classes}" style="${this.ellipsisStyles}"><slot /></h1>`
  }

  static get styles() {
    return Text.getStyles('h1', componentName, componentConfig[componentName])
  }
}
