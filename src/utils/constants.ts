import { Colors } from '@kreattix/colors'
import { CSSProperties } from 'react'

import { ThemeTypes } from './types'

export const appPreffix = 'kd'

export const sizedProperties: string[] = [
  'fontSize',
  'lineHeight',
  'margin',
  'padding',
  'borderRadius'
] as const

export const defaultBodyStyles: CSSProperties = {
  backgroundColor: Colors.white,
  color: Colors.black[800],
  margin: 0
} as const

export const defaultRootStyles: CSSProperties = {
  fontFamily: 'system-ui, Roboto, Montserrat, Poppins, sans-serif',
  fontSize: 16
} as const

export const pixeledProperties: string[] = ['borderWidth', 'letterSpacing']

export const ThemeColors = {
  primary: Colors.blue[500],
  secondary: Colors.blueGray[500],
  success: Colors.green[500],
  error: Colors.red[500],
  info: Colors.blue[500],
  warning: Colors.yellow[500],
  dark: Colors.blueGray[900],
  light: Colors.blueGray[100]
} as const

export const ThemeSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small'
} as const

export const ThemeFontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 800
} as const

export const ThemeBorderRadius = {
  circle: 'circle',
  rounded: 'rounded',
  square: 'square'
} as const

export const componentConfig: Partial<ThemeTypes.Components> = {
  display: {
    fontSize: 56,
    margin: 0
  },
  heading: {
    fontSize: 36,
    margin: 0
  },
  label: {
    fontSize: 14,
    margin: 0
  },
  paragraph: {
    fontSize: 16,
    margin: 0
  },
  title: {
    fontSize: 24,
    margin: 0
  }
}
