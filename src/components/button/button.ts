import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ComponentNameType } from '../../types'
import { appPreffix } from '../../utils/constants'

const componentName: ComponentNameType = 'button'

@customElement([appPreffix, componentName].join('-'))
export class Button extends LitElement {
  classes = ''
  render() {
    return html`<button class="${this.classes}">
      <slot />
    </button>`
  }
  static get styles() {
    return css`
      button {
        font-family: var(--font-family);
      }
    `
  }
}
