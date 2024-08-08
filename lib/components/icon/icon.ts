import { Colors } from '@kreattix/colors'
import { Theme, appPrefix } from '@kreattix/constants'
import { classnames } from '@kreattix/utils'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ComponentName, IconVarients } from '../../configs'
import { IconStyles } from './icon.styles'

@customElement(`${appPrefix}-${ComponentName.Icon}`)
export class KdIcon extends LitElement {
  @property({ type: String }) icon?: string

  @property({ type: String }) varient?: keyof typeof IconVarients

  @property({ type: String }) size?: keyof typeof Theme.Sizes

  @property({ type: String }) color?: keyof typeof Colors & keyof typeof Theme.Colors

  render() {
    const iconClasses = classnames('icon', {
      [`${this.varient}`]: this.varient,
      [`size-${this.size}`]: this.size,
      [`color-${this.color}`]: this.color
    })
    return html`<span class="${iconClasses}">${this.icon}</span>`
  }

  static get styles() {
    return IconStyles
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-icon': KdIcon
  }
}
