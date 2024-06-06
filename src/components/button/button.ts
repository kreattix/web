import { Color } from '@kreattix/colors'
import { classnames, objectEntries } from '@kreattix/utils'
import { LitElement, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import { ComponentNameType, SizeTypes, ThemeColorTypes } from '../../types'
import { KreattixColors, STYLE, appPreffix, componentConfig } from '../../utils'

const componentName: ComponentNameType = 'button'

@customElement([appPreffix, componentName].join('-'))
export class Button extends LitElement {
  @property({ reflect: true, type: String })
  color?: ThemeColorTypes = 'primary'

  @property({ reflect: true, type: Boolean })
  fullWidth?: boolean

  @property({ reflect: true, type: String })
  size?: SizeTypes

  @property({ reflect: true, type: String })
  radius?: 'square' | 'rounded' | 'circle'

  @property({ reflect: true, type: Boolean })
  disabled?: boolean

  get classes() {
    return classnames({
      [`size-${this.size}`]: this.size,
      [`color-${this.color}`]: this.color,
      [`radius-${this.radius}`]: this.radius,
      ['full-width']: ['true', ''].includes(String(this.fullWidth))
    })
  }
  render() {
    return unsafeHTML(`<button
      class="${this.classes}"
      ${this.disabled && 'disabled'}
    >
      <slot />
    </button>`)
  }
  static get styles() {
    const styles = STYLE.createCSS(componentConfig.button, 'button', componentName)
    const fullWidthStyles = STYLE.createCSS(
      { width: '100%' },
      '.full-width',
      componentName
    )

    return [
      unsafeCSS(styles),
      unsafeCSS(fullWidthStyles),
      css`
        .radius-square {
          border-radius: 0;
        }
        .radius-circle {
          border-radius: 50px;
        }
        :disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }
      `,
      ...objectEntries(KreattixColors).map(([keyName, value]) => {
        const color = Color(value)
        return unsafeCSS(`
          .color-${keyName} {
            background-color: var(${STYLE.getVariableName(keyName, 'main')}, ${value});
            color: var(${STYLE.getVariableName(keyName, 'contrast')}, ${color.palette.contrast});
            border-color: var(${STYLE.getVariableName(keyName, 'main')}, ${value});
            &:not(:disabled):hover {
              background-color: var(${STYLE.getVariableName(keyName, 'hover')}, ${color.palette.hover});
              border-color: var(${STYLE.getVariableName(keyName, 'hover')}, ${color.palette.hover});
            }
            &:not(:disabled):active {
              background-color: var(${STYLE.getVariableName(keyName, 'active')}, ${color.palette.active});
              border-color: var(${STYLE.getVariableName(keyName, 'active')}, ${color.palette.active});
            }
          }
        `)
      })
    ]
  }
}
