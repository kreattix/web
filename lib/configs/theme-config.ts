import { Colors } from '@kreattix/colors'
import { ICSSProperties } from '@kreattix/utils'
import { CSSProperties } from 'react'

export enum ComponentName {
  Display = 'display',
  Heading = 'heading',
  Paragraph = 'paragraph',
  Label = 'label',
  Title = 'title',
  Span = 'span',
  Button = 'button',
  Icon = 'icon',
  Text = 'text'
}

export const defaultBodyStyles: CSSProperties = {
  backgroundColor: Colors.white,
  color: Colors.black[800],
  margin: 0
} as const

export const defaultRootStyles: ICSSProperties = {
  fontSize: 16,
  fontFamily: 'system-ui, Roboto, Montserrat, Poppins, sans-serif'
} as const

export const IconVarients = {
  material: 'Material Icons',
  'material-outlined': 'Material Icons Outlined',
  'material-round': 'Material Icons Round',
  'material-sharp': 'Material Icons Sharp'
}

export const commonStyles = {
  padding: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 40
  },
  margin: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 40
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 40
  },
  spacing: {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 50,
    xxxl: 80
  }
}
