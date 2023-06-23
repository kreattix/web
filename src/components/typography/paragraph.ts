import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { kreattixConfig } from '../../config/kreattixConfig'
import { themeConfig } from '../../config/themeConfig'
import { COMPONENT_NAME } from '../../enums'
import { Typography } from './typography'

const styles = themeConfig.components[COMPONENT_NAME.PARAGRAPH]
const componentConfig = kreattixConfig[COMPONENT_NAME.PARAGRAPH]

@customElement(componentConfig.componentName)
export class Paragraph extends Typography {
  render() {
    return html`<p class="${this.getComponentClass()}"><slot></slot></p>`
  }
  static styles = Typography.getComponentStyles(componentConfig, styles)
}
