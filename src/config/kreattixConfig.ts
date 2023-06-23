import { COMPONENT_NAME } from '../enums'
import { ComponentConfig } from '../types'

export const prefix = 'kd'

const getComponentDetails = (value: COMPONENT_NAME, tagName: string): ComponentConfig => ({
  componentName: [prefix, value].join('-'),
  displayName: value,
  tagName,
})

export const kreattixConfig: Record<COMPONENT_NAME, ComponentConfig> = {
  [COMPONENT_NAME.SPAN]: getComponentDetails(COMPONENT_NAME.SPAN, 'span'),
  [COMPONENT_NAME.LABEL]: getComponentDetails(COMPONENT_NAME.LABEL, 'label'),
  [COMPONENT_NAME.PARAGRAPH]: getComponentDetails(COMPONENT_NAME.PARAGRAPH, 'p'),
  [COMPONENT_NAME.SUBTITLE]: getComponentDetails(COMPONENT_NAME.SUBTITLE, 'h3'),
  [COMPONENT_NAME.TITLE]: getComponentDetails(COMPONENT_NAME.TITLE, 'h2'),
  [COMPONENT_NAME.HEADING]: getComponentDetails(COMPONENT_NAME.HEADING, 'h1'),
}
