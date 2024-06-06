import { Colors } from '@kreattix/colors'
import { ICSSProperties } from '@kreattix/utils'
import { CSSProperties } from 'react'

import { ThemeTypes } from './types'

export const appPreffix = 'kd'

export const defaultBodyStyles: CSSProperties = {
  backgroundColor: Colors.white,
  color: Colors.black[800],
  margin: 0
} as const

export const defaultRootStyles: ICSSProperties = {
  fontSize: 16,
  fontFamily: 'system-ui, Roboto, Montserrat, Poppins, sans-serif'
} as const

export const KreattixColors = {
  primary: Colors.blue[500],
  secondary: Colors.purple[500],
  success: Colors.green[500],
  error: Colors.red[500],
  info: Colors.cyan[500],
  warning: Colors.amber[500],
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

export const componentConfig: ThemeTypes.Components = {
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
  },
  span: {},
  button: {
    fontSize: 16,
    outline: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    transition: 'all 0.3s ease-in-out'
  }
}
