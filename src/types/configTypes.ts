import { COMPONENT_NAME, FONT_WEIGHTS } from '../enums'
import { Variants } from './commonTypes'

export interface TypographyStyles {
  fontFamily?: string
  fontSize?: number
  fontWeight?: FONT_WEIGHTS
}

export interface ComponentStyles {
  [COMPONENT_NAME.SPAN]: TypographyStyles
  [COMPONENT_NAME.LABEL]: TypographyStyles
  [COMPONENT_NAME.PARAGRAPH]: TypographyStyles
  [COMPONENT_NAME.SUBTITLE]: TypographyStyles
  [COMPONENT_NAME.TITLE]: TypographyStyles
  [COMPONENT_NAME.HEADING]: TypographyStyles
}

export interface PalleteConfig {
  main: string
  hover: string
  active: string
  light: string
  dark: string
  contrast: string
}

export interface ThemeConfig {
  components: ComponentStyles
  pallete: Record<Variants, PalleteConfig>
}
