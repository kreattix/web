import { Colors } from '@kreattix/colors'
import { Theme } from '@kreattix/constants'
import { ICSSProperties, classnames, objectEntries } from '@kreattix/utils'
import { LitElement, css, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import { FontWeightTypes, SizeTypes, ThemeColorTypes } from '../../types'
import { STYLE } from '../../utils'

export class TextBase extends LitElement {
  @property({ reflect: true, type: String })
  size?: SizeTypes

  @property({ reflect: true, type: String })
  color?: ThemeColorTypes

  @property({ reflect: true, type: String })
  weight?: FontWeightTypes

  @property({ reflect: true, type: String })
  ellipsis?: boolean | number

  get ellipsisStyles() {
    return this.ellipsis ? `-webkit-line-clamp: ${this.ellipsis}` : undefined
  }

  get classes() {
    return classnames({
      [`size-${this.size}`]: this.size,
      [`color-${this.color}`]: this.color,
      [`weight-${this.weight}`]: this.weight,
      [`ellipsis`]: typeof this.ellipsis === 'string' && ['true', ''].includes(this.ellipsis),
      [`ellipsis-clamp`]: this.ellipsis && !isNaN(Number(this.ellipsis))
    })
  }

  static getStyles(tagName: string, componentName: string, componentStyles?: ICSSProperties) {
    let styles = ''
    if (componentStyles) {
      styles = STYLE.createCSS(componentStyles, tagName, componentName)
    }

    return [
      unsafeCSS(styles),
      ...objectEntries(Theme.Colors).map(([colorName, value]) => {
        return unsafeCSS(`
          .color-${colorName} {
            color: var(${STYLE.getVariableName(colorName, 'main')}, ${value});
          }
        `)
      }),
      ...objectEntries(Colors).map(([colorName, value]) => {
        return unsafeCSS(`
          .color-${colorName} {
            color: var(${STYLE.getVariableName('color', colorName)}, ${value[500]});
          }
        `)
      }),
      ...objectEntries(Theme.FontWeights).map(([keyName, value]) => {
        return unsafeCSS(`
          .weight-${keyName} {
            font-weight: var(${STYLE.getVariableName('weight', keyName)}, ${value});
          }
        `)
      }),
      css`
        .ellipsis {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .ellipsis-clamp {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `
    ]
  }
}
