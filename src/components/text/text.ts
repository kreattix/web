import { classnames } from '@kreattix/utils'
import { LitElement, css, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import {
  ComponentStyleTypes,
  FontWeightTypes,
  SizeTypes,
  ThemeColorTypes
} from '../../types'
import { ThemeColors, ThemeFontWeights } from '../../utils/constants'
import { getVarName } from '../../utils/theme'

export class Text extends LitElement {
  @property({ reflect: true, type: String })
  size?: SizeTypes

  @property({ reflect: true, type: String })
  color?: ThemeColorTypes

  @property({ reflect: true, type: String })
  weight?: FontWeightTypes

  @property({ reflect: true, type: Boolean })
  ellipsis?: boolean

  get classes() {
    return classnames({
      [`size-${this.size}`]: this.size,
      [`color-${this.color}`]: this.color,
      [`weight-${this.weight}`]: this.weight,
      [`ellipsis`]: this.ellipsis
    })
  }

  static getStyles(tagName: string, componentStyles?: ComponentStyleTypes) {
    return [
      componentStyles
        ? css`
            ${unsafeCSS(tagName)} {
              font-size: ${unsafeCSS(componentStyles['font-size'])};
              line-height: ${unsafeCSS(componentStyles['line-height'])};
              margin: ${unsafeCSS(componentStyles['margin'])};
            }
            .size-large {
              font-size: ${unsafeCSS(componentStyles['font-size-large'])};
              line-height: ${unsafeCSS(componentStyles['line-height-large'])};
              margin: ${unsafeCSS(componentStyles['margin-large'])};
            }
            .size-small {
              font-size: ${unsafeCSS(componentStyles['font-size-small'])};
              line-height: ${unsafeCSS(componentStyles['line-height-small'])};
              margin: ${unsafeCSS(componentStyles['margin-small'])};
            }
          `
        : css``,
      ...Object.entries(ThemeColors).map(([variant, color]) => {
        return css`
          .color-${unsafeCSS(variant)} {
            color: var(${unsafeCSS(getVarName(variant, 'main'))}, ${unsafeCSS(color)});
          }
        `
      }),
      ...Object.entries(ThemeFontWeights).map(([weight, value]) => {
        return css`
          .weight-${unsafeCSS(weight)} {
            font-weight: ${unsafeCSS(value)};
          }
        `
      }),
      css`
        .ellipsis {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      `
    ]
  }
}
