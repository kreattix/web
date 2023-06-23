import { COMPONENT_NAME } from '../enums'

export type Sizes = 'large' | 'medium' | 'small'

export type Variants = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

export interface ComponentConfig {
  componentName: string
  displayName: COMPONENT_NAME
  tagName: string
}
