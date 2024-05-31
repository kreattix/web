import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils/constants'
import { Text } from './text'

const componentName: ComponentNameType = 'paragraph'

@customElement([appPreffix, componentName].join('-'))
export class Paragraph extends Text {
  render() {
    return html`<p class="${this.classes}"><slot /></p>`
  }

  static get styles() {
    return Text.getStyles('p', componentName, componentConfig[componentName])
  }
}
