import { appPrefix } from '@kreattix/constants'
import { classnames } from '@kreattix/utils'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { ThemeColorTypes } from '../../types'
import { ButtonStyles } from './button.styles'

@customElement([appPrefix, ComponentName.Button].join('-'))
export class Button extends LitElement {
  @property({ type: String }) color?: ThemeColorTypes = 'primary'

  get classes() {
    return classnames({
      [`color-${this.color}`]: this.color
    })
  }

  render() {
    return html`<button class="${this.classes}">
      <slot></slot>
    </button>`
  }
  static get styles() {
    return ButtonStyles
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-button': Button
  }
}
