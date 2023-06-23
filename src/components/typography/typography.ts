import { mapClass } from '@kreattix/utils'
import { css, LitElement, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'
import { CSSProperties } from 'react'

import { ThemeConfig, themeConfig } from '../../config/themeConfig'
import { FONT_WEIGHTS } from '../../enums'
import { ComponentConfig, Sizes, Variants } from '../../types'
import { getLineHeights, getSizes, getVarName, ifBLock } from '../../utils'

export class Typography extends LitElement {
  @property({ reflect: true, type: String })
  size?: Sizes

  @property({ attribute: 'ellipsis', reflect: true, type: Boolean })
  isEllipsis = false

  @property({ attribute: 'italic', reflect: true, type: Boolean })
  isItalic?: boolean

  @property({ attribute: 'underline', reflect: true, type: Boolean })
  isUnderlined?: boolean

  @property({ attribute: 'variant', reflect: true, type: String })
  variant?: Variants

  @property({ attribute: 'weight', reflect: true, type: String })
  weight?: FONT_WEIGHTS

  static getEllipsisStyles = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `

  getComponentClass() {
    return mapClass(null, {
      [`ellipsis`]: !!this.isEllipsis,
      [`italic`]: !!this.isItalic,
      [`underline`]: !!this.isUnderlined,
      [`size-${this.size}`]: !!this.size,
      [`variant-${this.variant}`]: !!this.variant,
      [`weight-${this.weight}`]: !!this.weight,
    })
  }

  static getComponentStyles(componentConfig: ComponentConfig, componentStyles: CSSProperties) {
    const fontSize = getSizes(componentStyles.fontSize)
    const lineHeight = getLineHeights(componentStyles.fontSize)

    const isSpan = componentConfig.displayName === 'span'
    return [
      ifBLock(
        !isSpan,
        css`
          ${unsafeCSS(componentConfig.tagName)} {
            margin: 0;
            font-size: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'font-size'))},
              ${fontSize.medium}px
            );
            line-height: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'line-height'))},
              ${lineHeight.medium}px
            );
            font-weight: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'weight'))},
              ${unsafeCSS(componentStyles.fontWeight)}
            );
          }
          .size-large {
            font-size: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'font-size-lg'))},
              ${fontSize.large}px
            );
            line-height: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'line-height-lg'))},
              ${lineHeight.large}px
            );
          }
          .size-small {
            font-size: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'font-size-sm'))},
              ${fontSize.small}px
            );
            line-height: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'line-height-sm'))},
              ${lineHeight.small}px
            );
          }
          .ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        `,
        css`
          ${unsafeCSS(componentConfig.tagName)} {
            font-size: var(${unsafeCSS(getVarName(componentConfig.displayName, 'font-size'))}, 1em);
          }
          .size-large {
            font-size: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'font-size-lg'))},
              1.25em
            );
          }
          .size-small {
            font-size: var(
              ${unsafeCSS(getVarName(componentConfig.displayName, 'font-size-sm'))},
              0.75em
            );
          }
        `,
      ),
      css`
        .italic {
          font-style: italic;
        }
        .underline {
          text-decoration: underline;
        }
      `,
      ...Object.keys(themeConfig.pallete).map((variantName) => {
        const variantConfig = themeConfig.pallete[variantName as keyof ThemeConfig['pallete']]
        if (variantConfig) {
          return css`
            ${unsafeCSS(`.variant-${variantName}`)} {
              color: var(
                ${unsafeCSS(getVarName(variantName, 'color'))},
                ${unsafeCSS(variantConfig.main)}
              );
            }
          `
        }
        return css``
      }),
      ...Object.values(FONT_WEIGHTS)
        .filter((item) => typeof item === 'string')
        .map((weightName) => {
          const weightValue = FONT_WEIGHTS[weightName as FONT_WEIGHTS]
          if (weightValue) {
            return css`
              ${unsafeCSS(`.weight-${weightName}`)} {
                font-weight: var(
                  ${unsafeCSS(getVarName('weight', weightName.toString()))},
                  ${unsafeCSS(weightValue)}
                );
              }
            `
          }
          return css``
        }),
    ]
  }
}
