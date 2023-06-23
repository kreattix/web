import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { kreattixConfig } from '../../config/kreattixConfig'
import { themeConfig } from '../../config/themeConfig'
import { COMPONENT_NAME } from '../../enums'
import { Typography } from './typography'

const styles = themeConfig.components[COMPONENT_NAME.SUBTITLE]
const componentConfig = kreattixConfig[COMPONENT_NAME.SUBTITLE]

@customElement(componentConfig.componentName)
export class SubTitle extends Typography {
  render() {
    return html`<h3 class="${this.getComponentClass()}"><slot></slot></h3>`
  }

  static styles = Typography.getComponentStyles(componentConfig, styles)
}
