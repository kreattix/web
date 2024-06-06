import { Color } from '@kreattix/colors'
import { classnames, objectEntries } from '@kreattix/utils'
import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ComponentNameType, ThemeColorTypes } from '../../types'
import { KreattixColors, STYLE, appPreffix, componentConfig } from '../../utils'

const componentName: ComponentNameType = 'button'

@customElement([appPreffix, componentName].join('-'))
export class Button extends LitElement {
  @property({ reflect: true, type: String })
  color?: ThemeColorTypes

  @property({ reflect: true, type: String })
  fullWidth?: boolean

  get classes() {
    return classnames({
      [`color-${this.color}`]: this.color,
      ['full-width']: ['true', ''].includes(String(this.fullWidth))
    })
  }
  render() {
    return html`<button class="${this.classes}">
      <slot />
    </button>`
  }
  static get styles() {
    const styles = STYLE.createCSS(componentConfig.button, 'button', componentName)

    return [
      unsafeCSS(styles),
      css`
        .full-width {
          width: 100%;
        }
      `,
      ...objectEntries(KreattixColors).map(([keyName, value]) => {
        const color = Color(value)
        return unsafeCSS(`
          .color-${keyName} {
            background-color: var(${STYLE.getVariableName(keyName, 'main')}, ${value});
            color: var(${STYLE.getVariableName(keyName, 'contrast')}, ${color.palette.contrast});
            border-color: var(${STYLE.getVariableName(keyName, 'main')}, ${value});
            &:hover {
              background-color: var(${STYLE.getVariableName(keyName, 'hover')}, ${color.palette.hover});
              border-color: var(${STYLE.getVariableName(keyName, 'hover')}, ${color.palette.hover});
            }
            &:active {
              background-color: var(${STYLE.getVariableName(keyName, 'active')}, ${color.palette.active});
              border-color: var(${STYLE.getVariableName(keyName, 'active')}, ${color.palette.active});
            }
          }
        `)
      })
    ]
  }
}
