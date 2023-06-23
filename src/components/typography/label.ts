import { css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { kreattixConfig } from '../../config/kreattixConfig'
import { themeConfig } from '../../config/themeConfig'
import { COMPONENT_NAME } from '../../enums'
import { Typography } from './typography'

const styles = themeConfig.components[COMPONENT_NAME.LABEL]
const componentConfig = kreattixConfig[COMPONENT_NAME.LABEL]

@customElement(componentConfig.componentName)
export class Label extends Typography {
  render() {
    return html`<label class="${this.getComponentClass()}"><slot></slot></label>`
  }
  static styles = [
    Typography.getComponentStyles(componentConfig, styles),
    css`
      label {
        display: block;
      }
    `,
  ]
}
