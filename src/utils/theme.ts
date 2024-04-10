import { objectEntries } from '@kreattix/utils'
import { CSSProperties } from 'react'

import { appPreffix, pixeledProperties, sizedProperties } from './constants'
import { getSize } from './size'
import { CSSPropertyNames, ComponentNameType, ComponentStyleTypes } from './types'

const root = document.documentElement
export const setRootStyle = (property: string, value: string) => {
  if (root) {
    root.style.setProperty(property, value)
  }
}

export const getVarName = (...args: string[]) => {
  return `--${appPreffix}-${args.join('-')}`
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

export function appendUnit(property: CSSPropertyNames, value: unknown) {
  if (
    typeof value === 'number' &&
    [...sizedProperties, ...pixeledProperties].includes(property)
  ) {
    return value + 'px'
  }
  return value as string
}

export function stringifyStyles(selector: string, cssObject: CSSProperties) {
  let cssString = `${selector} {`
  objectEntries(cssObject).forEach(([key, value]) => {
    const property = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    cssString += `${property}: ${appendUnit(key, value)};`
  })
  cssString += ' }'
  return cssString
}

export const getCombinedStyles = (
  defaultStyles: CSSProperties,
  styles?: CSSProperties
) => {
  const combinedStyles = { ...defaultStyles, ...styles }
  if (combinedStyles.fontSize && !combinedStyles.lineHeight) {
    const sizes = getSize(Number(combinedStyles.fontSize))
    combinedStyles['lineHeight'] = sizes.lineHeight.medium
  }
  return combinedStyles
}

export function getComponentStyles(
  component: ComponentNameType,
  styleConfig: ComponentStyleTypes | any,
  prefix: string = appPreffix
) {
  const styles: ComponentStyleTypes = {}
  if (styleConfig.fontSize && !styleConfig.lineHeight) {
    styleConfig['lineHeight'] = styleConfig.fontSize
  }
  Object.entries(styleConfig).forEach(([key, value]) => {
    const property = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    const varPrefix = `${prefix}-${component}-${property}`

    if (sizedProperties.includes(key)) {
      const sizes = getSize(Number(value))
      const sizedValue = sizes[key as keyof typeof sizes]

      styles[property] = `var(--${varPrefix}, ${sizedValue.medium})`
      styles[property + '-small'] = `var(--${varPrefix}-small, ${sizedValue.small})`
      styles[property + '-large'] = `var(--${varPrefix}-large, ${sizedValue.large})`
    } else if (pixeledProperties.includes(key)) {
      styles[property] = `var(--${varPrefix}, ${value}px)`
    } else {
      styles[property] = `var(--${varPrefix}, ${value})`
    }
  })
  return styles
}
