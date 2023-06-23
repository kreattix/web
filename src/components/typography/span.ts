import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { kreattixConfig } from '../../config/kreattixConfig'
import { themeConfig } from '../../config/themeConfig'
import { COMPONENT_NAME } from '../../enums'
import { Typography } from './typography'

const styles = themeConfig.components[COMPONENT_NAME.SPAN]
const componentConfig = kreattixConfig[COMPONENT_NAME.SPAN]

@customElement(componentConfig.componentName)
export class Span extends Typography {
  render() {
    return html`<span class="${this.getComponentClass()}"><slot></slot></span>`
  }
  static styles = Typography.getComponentStyles(componentConfig, styles)
}
