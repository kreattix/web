import { Colors } from '@kreattix/colors'
import { CSSProperties } from 'react'

export const appPreffix = 'kd'

export const sizedProperties = [
  'fontSize',
  'lineHeight',
  'margin',
  'padding',
  'borderRadius',
]

export const defaultBodyStyles: CSSProperties = {
  backgroundColor: Colors.white,
  color: Colors.black[800],
  margin: 0,
}

export const defaultRootStyles: CSSProperties = {
  fontFamily: 'system-ui, Roboto, Montserrat, Poppins, sans-serif',
  fontSize: 16,
}

export const pixeledProperties = ['borderWidth', 'letterSpacing']

export const ThemeColors = {
  danger: Colors.red[500],
  dark: Colors.blueGray[900],
  info: Colors.blue[500],
  light: Colors.blueGray[100],
  primary: Colors.blue[500],
  secondary: Colors.blueGray[500],
  success: Colors.green[500],
  warning: Colors.yellow[500],
} as const

export const ThemeSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
} as const

export const ThemeFontWeights = {
  black: 800,
  bold: 700,
  light: 300,
  medium: 500,
  normal: 400,
  semiBold: 600,
} as const

export const ThemeBorderRadius = {
  circle: 'circle',
  rounded: 'rounded',
  square: 'square',
} as const
