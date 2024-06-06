import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils'
import { Text } from './text'

const componentName: ComponentNameType = 'heading'

@customElement([appPreffix, componentName].join('-'))
export class Heading extends Text {
  render() {
    return html`<h2 class="${this.classes}"><slot /></h2>`
  }

  static get styles() {
    return Text.getStyles('h2', componentName, componentConfig[componentName])
  }
}
