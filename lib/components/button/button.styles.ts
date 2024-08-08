import { Color } from '@kreattix/colors'
import { Theme } from '@kreattix/constants'
import { objectEntries } from '@kreattix/utils'
import { unsafeCSS } from 'lit'

import { ComponentName, commonStyles } from '../../configs'
import { STYLE } from '../../utils'

export const ButtonStyleConfig = {
  fontSize: 16,
  borderRadius: commonStyles.borderRadius.sm,
  padding: `${commonStyles.padding.sm} ${commonStyles.padding.md}`
}

export const ButtonStyles = [
  unsafeCSS(STYLE.createCSS(ButtonStyleConfig, ComponentName.Button, ComponentName.Button)),
  unsafeCSS(
    objectEntries(Theme.Colors).map(([colorName, color]) => {
      const palette = Color(color).palette
      return `.color-${colorName} {
          background-color: var(${STYLE.getVariableName(colorName, 'main')}, ${palette.main});
          color: var(${STYLE.getVariableName(colorName, 'contrast')}, ${palette.contrast});
        }`
    })
  )
]
