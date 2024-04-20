import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils/constants'
import { getComponentStyles } from '../../utils/theme'
import { Text } from './text'

const componentName: ComponentNameType = 'paragraph'

@customElement([appPreffix, componentName].join('-'))
export class Paragraph extends Text {
  render() {
    return html`<p class="${this.classes}"><slot /></p>`
  }

  static get styles() {
    const styles = getComponentStyles(componentName, componentConfig[componentName])
    return Text.getStyles('p', styles)
  }
}
