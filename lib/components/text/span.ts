import { appPrefix } from '@kreattix/constants'
import { css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentName } from '../../configs'
import { TextBase } from './text-base'
import { SpanStyles } from './text.styles'

@customElement([appPrefix, ComponentName.Span].join('-'))
export class Span extends TextBase {
  render() {
    return html`<span class="${this.classes}"><slot></slot></span>`
  }

  static get styles() {
    return [
      TextBase.getStyles('span', ComponentName.Span, SpanStyles),
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

declare global {
  interface HTMLElementTagNameMap {
    'kd-span': Span
  }
}
