import { Pallete } from '@kreattix/colors'

import { COMPONENT_NAME } from '../enums'

export const themeConfig = {
  components: {
    [COMPONENT_NAME.SPAN]: {},
    [COMPONENT_NAME.LABEL]: {
      fontSize: 14,
      fontWeight: 500,
    },
    [COMPONENT_NAME.PARAGRAPH]: {
      fontSize: 16,
      fontWeight: 400,
    },
    [COMPONENT_NAME.SUBTITLE]: {
      fontSize: 20,
      fontWeight: 600,
    },
    [COMPONENT_NAME.TITLE]: {
      fontSize: 28,
      fontWeight: 700,
    },
    [COMPONENT_NAME.HEADING]: {
      fontSize: 45,
      fontWeight: 700,
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

export type ThemeConfig = typeof themeConfig
