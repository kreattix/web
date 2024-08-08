import { Colors } from '@kreattix/colors'
import { Theme, appPrefix } from '@kreattix/constants'
import { classnames, objectEntries } from '@kreattix/utils'
import { CSSResultGroup, LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '../../assets/css/kreattix-icons.css'
import { IconVarients } from '../../configs'
import { ComponentNameType } from '../../types'
import { STYLE } from '../../utils'

const componentName: ComponentNameType = 'icon'

@customElement(`${appPrefix}-${componentName}`)
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

  static get styles(): CSSResultGroup {
    const variabledStyle = STYLE.getVariabledStyle(IconStyles, componentName)

    return [
      unsafeCSS(STYLE.createCSS(IconStyles, 'span', componentName)),
      unsafeCSS(`
        :host {
          vertical-align: ${variabledStyle['vertical-align']};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: ${variabledStyle['font-size']};
          height: ${variabledStyle['font-size']};
        }
        :host([size="small"]) {
          height: ${variabledStyle['font-size-small']};
        }
        :host([size="large"]) {
          height: ${variabledStyle['font-size-large']};
        }
        span {
          font-size: ${variabledStyle['font-size']};
          line-height: ${variabledStyle['font-size']};
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
        }
        .size-small {
          font-size: ${variabledStyle['font-size-small']};
          line-height: ${variabledStyle['font-size-small']};
        }
        .size-large {
          font-size: ${variabledStyle['font-size-large']};
          line-height: ${variabledStyle['font-size-large']};
        }
        .material {
          font-family: ${IconVarients['material']};
        }
        .material-outlined {
          font-family: ${IconVarients['material-outlined']};
        }
        .material-round {
          font-family: ${IconVarients['material-round']};
        }
        .material-sharp {
          font-family: ${IconVarients['material-sharp']};
        }
      `),
      unsafeCSS(
        objectEntries(Theme.Colors).map(([colorName, value]) => {
          return `.color-${colorName} {
            color: var(${STYLE.getVariableName(colorName, 'main')}, ${value});
          }`
        })
      ),
      unsafeCSS(
        objectEntries(Colors).map(([colorName, value]) => {
          return `.color-${colorName} {
            color: var(${STYLE.getVariableName('color', colorName)}, ${value[500]});
          }`
        })
      )
    ]
  }
}

const IconStyles = {
  fontSize: '1em',
  verticalAlign: 'middle',
  fontSizeSmall: '0.8em',
  fontSizeLarge: '1.25em'
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-icon': KdIcon
  }
}
