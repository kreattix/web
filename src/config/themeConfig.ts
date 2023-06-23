import { Pallete } from '@kreattix/colors'

import { COMPONENT_NAME, FONT_WEIGHTS } from '../enums'
import { ThemeConfig } from '../types'

export const themeConfig: ThemeConfig = {
  components: {
    [COMPONENT_NAME.SPAN]: {
      fontWeight: FONT_WEIGHTS.inherit,
    },
    [COMPONENT_NAME.LABEL]: {
      fontFamily: 'inherit',
      fontSize: 14,
      fontWeight: FONT_WEIGHTS.medium,
    },
    [COMPONENT_NAME.PARAGRAPH]: {
      fontFamily: 'inherit',
      fontSize: 16,
      fontWeight: FONT_WEIGHTS.normal,
    },
    [COMPONENT_NAME.SUBTITLE]: {
      fontFamily: 'inherit',
      fontSize: 20,
      fontWeight: FONT_WEIGHTS.semibold,
    },
    [COMPONENT_NAME.TITLE]: {
      fontFamily: 'inherit',
      fontSize: 28,
      fontWeight: FONT_WEIGHTS.bold,
    },
    [COMPONENT_NAME.HEADING]: {
      fontFamily: 'inherit',
      fontSize: 45,
      fontWeight: FONT_WEIGHTS.bold,
    },
  },
  pallete: {
    error: Pallete.red,
    info: Pallete.cyan,
    primary: Pallete.blue,
    secondary: Pallete.blueGray,
    success: Pallete.green,
    warning: Pallete.amber,
  },
}
