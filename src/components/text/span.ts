import { css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix, componentConfig } from '../../utils'
import { Text } from './text'

const componentName: ComponentNameType = 'span'

@customElement([appPreffix, componentName].join('-'))
export class Span extends Text {
  render() {
    return html`<span class="${this.classes}"><slot /></span>`
  }

  static get styles() {
    return [
      Text.getStyles('span', componentName, componentConfig[componentName]),
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
