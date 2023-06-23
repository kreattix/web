import _ from 'lodash'

import { pixelizedProperties, sizableProperties } from '../config/pixelizedProperties'
import { ComponentStyles, ThemeConfig } from '../types'
import { appendPixel, getLineHeights, getSizes, getVarName } from './styleUtils'

const root = document.documentElement

export function hyphenizeString(value: string): string {
  return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function pixelize(propertyName: string, value?: string | number) {
  if (_.isNull(value) || _.isUndefined(value)) return ''
  if (pixelizedProperties.includes(propertyName)) return (appendPixel(value) || '').toString()
  return value.toString() || ''
}

export function setProperty(property: string, propertyName: string, value?: string | number) {
  if (sizableProperties.includes(property)) {
    const sizes = getSizes(value)
    root.style.setProperty(propertyName + '-sm', pixelize(property, sizes.small))
    root.style.setProperty(propertyName, pixelize(property, sizes.medium))
    root.style.setProperty(propertyName + '-lg', pixelize(property, sizes.large))
  } else {
    root.style.setProperty(propertyName, pixelize(property, value))
  }
}

export function configureTheme(config: ThemeConfig) {
  if (config && config.components) {
    Object.keys(config.components).forEach((component) => {
      const componentConfig = config.components[component as keyof ComponentStyles]
      if (componentConfig) {
        Object.keys(componentConfig).forEach((property) => {
          const propertyName = getVarName(component, hyphenizeString(property))
          const value = componentConfig[property as keyof typeof componentConfig]
          setProperty(property, propertyName, value)

          if (property === 'fontSize') {
            setProperty(
              'lineHeight',
              getVarName(component, hyphenizeString('lineHeight')),
              getLineHeights(value).medium,
            )
          }
        })
      }
    })
  }
}
