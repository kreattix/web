import { COMPONENT_NAME, FONT_WEIGHTS } from '../enums'

export type Sizes = 'large' | 'medium' | 'small'
export type FontWeights = keyof typeof FONT_WEIGHTS

export type Variants = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

export interface ComponentConfig {
  componentName: string
  displayName: COMPONENT_NAME
  tagName: string
}
