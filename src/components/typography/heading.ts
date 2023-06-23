import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { kreattixConfig } from '../../config/kreattixConfig'
import { themeConfig } from '../../config/themeConfig'
import { COMPONENT_NAME } from '../../enums'
import { Typography } from './typography'

const styles = themeConfig.components[COMPONENT_NAME.HEADING]
const componentConfig = kreattixConfig[COMPONENT_NAME.HEADING]

@customElement(componentConfig.componentName)
export class Heading extends Typography {
  render() {
    return html`<h1 class="${this.getComponentClass()}"><slot></slot></h1>`
  }

  static styles = Typography.getComponentStyles(componentConfig, styles)
}
