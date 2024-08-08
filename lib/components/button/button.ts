import { Color } from '@kreattix/colors'
import { Theme, appPrefix } from '@kreattix/constants'
import { classnames, objectEntries } from '@kreattix/utils'
import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { commonStyles } from '../../configs'
import { ComponentNameType, ThemeColorTypes } from '../../types'
import { STYLE } from '../../utils'

const componentName: ComponentNameType = 'button'

@customElement([appPrefix, componentName].join('-'))
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
    return [
      unsafeCSS(STYLE.createCSS(ButtonStyles, componentName, componentName)),
      unsafeCSS(
        objectEntries(Theme.Colors).map(([colorName, color]) => {
          const palette = Color(color).palette
          return `.color-${colorName} {
            background-color: var(${STYLE.getVariableName(colorName, 'main')}, ${palette.main});
            color: var(${STYLE.getVariableName(colorName, 'contrast')}, ${palette.contrast});
          }`
        })
      )
    ]
  }
}

const ButtonStyles = {
  fontSize: 16,
  borderRadius: commonStyles.borderRadius.sm,
  padding: `${commonStyles.padding.sm} ${commonStyles.padding.md}`
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-button': Button
  }
}
