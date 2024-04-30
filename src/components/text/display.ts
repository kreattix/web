import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils/constants'
import { getComponentStyles } from '../../utils/theme'
import { Text } from './text'

const componentName: ComponentNameType = 'display'

@customElement([appPreffix, componentName].join('-'))
export class Display extends Text {
  render() {
    return html`<h1 class="${this.classes}" style="${this.ellipsisStyles}"><slot /></h1>`
  }

  static get styles() {
    const styles = getComponentStyles(componentName, componentConfig[componentName])
    return Text.getStyles('h1', styles)
  }
}
