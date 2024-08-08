import { appPrefix } from '@kreattix/constants'
import { css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { TextBase } from './text-base'

const componentName: ComponentNameType = 'span'

@customElement([appPrefix, componentName].join('-'))
export class Span extends TextBase {
  render() {
    return html`<span class="${this.classes}"><slot></slot></span>`
  }

  static get styles() {
    return [
      TextBase.getStyles('span', componentName, SpanStyles),
      css`
        .size-large {
          font-size: 1.15em;
        }
        .size-small {
          font-size: 0.85em;
        }
      `
    ]
  }
}

const SpanStyles = {}

declare global {
  interface HTMLElementTagNameMap {
    'kd-span': Span
  }
}
