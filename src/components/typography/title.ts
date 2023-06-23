import { html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { kreattixConfig } from '../../config/kreattixConfig'
import { themeConfig } from '../../config/themeConfig'
import { COMPONENT_NAME } from '../../enums'
import { Typography } from './typography'

const styles = themeConfig.components[COMPONENT_NAME.TITLE]
const componentConfig = kreattixConfig[COMPONENT_NAME.TITLE]

@customElement(componentConfig.componentName)
export class Title extends Typography {
  render() {
    return html`<h2 class="${this.getComponentClass()}"><slot></slot></h2>`
  }

  static styles = Typography.getComponentStyles(componentConfig, styles)
}
