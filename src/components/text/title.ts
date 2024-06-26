import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils/constants'
import { Text } from './text'

const componentName: ComponentNameType = 'title'

@customElement([appPreffix, componentName].join('-'))
export class Title extends Text {
  render() {
    return html`<h3 class="${this.classes}"><slot /></h3>`
  }

  static get styles() {
    return Text.getStyles('h3', componentName, componentConfig[componentName])
  }
}
