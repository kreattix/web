import { Colors } from '@kreattix/colors'
import { Theme } from '@kreattix/constants'
import { objectEntries } from '@kreattix/utils'
import { unsafeCSS } from 'lit'

import { ComponentName, IconVarients } from '../../configs'
import { STYLE } from '../../utils'

const IconStyleConfig = {
  fontSize: '1em',
  verticalAlign: 'middle',
  fontSizeSmall: '0.8em',
  fontSizeLarge: '1.25em'
}
const variabledStyle = STYLE.getVariabledStyle(IconStyleConfig, ComponentName.Icon)

export const IconStyles = [
  unsafeCSS(STYLE.createCSS(IconStyleConfig, 'span', ComponentName.Icon)),
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
