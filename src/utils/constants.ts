import { Colors } from '@kreattix/colors'
import { CSSProperties } from 'react'

import { CSSPropertyNames } from './types'

export const appPreffix = 'kd'

export const sizedProperties: CSSPropertyNames[] = [
  'fontSize',
  'lineHeight',
  'margin',
  'padding',
  'borderRadius',
] as const

export const defaultBodyStyles: CSSProperties = {
  backgroundColor: Colors.white,
  color: Colors.black[800],
  margin: 0,
} as const

export const defaultRootStyles: CSSProperties = {
  fontFamily: 'system-ui, Roboto, Montserrat, Poppins, sans-serif',
  fontSize: 16,
} as const

export const pixeledProperties: CSSPropertyNames[] = ['borderWidth', 'letterSpacing']

export const ThemeColors = {
  primary: Colors.blue[500],
  secondary: Colors.blueGray[500],
  success: Colors.green[500],
  danger: Colors.red[500],
  info: Colors.blue[500],
  warning: Colors.yellow[500],
  dark: Colors.blueGray[900],
  light: Colors.blueGray[100],
} as const

export const ThemeSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
} as const

export const ThemeFontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  black: 800,
} as const

export const ThemeBorderRadius = {
  circle: 'circle',
  rounded: 'rounded',
  square: 'square',
} as const
