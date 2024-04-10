import { Color } from '@kreattix/colors'
import { objectEntries } from '@kreattix/utils'
import { CSSProperties } from 'react'

import { getSize } from '.'
import {
  appPreffix,
  defaultBodyStyles,
  defaultRootStyles,
  pixeledProperties,
  sizedProperties,
} from './constants'
import { CSSPropertyNames, ThemeTypes } from './types'

const root = document.documentElement
function setRootStyle(property: string, value: string) {
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
  styles?: CSSProperties,
) => {
  const combinedStyles = { ...defaultStyles, ...styles }
  if (combinedStyles.fontSize && !combinedStyles.lineHeight) {
    const sizes = getSize(Number(combinedStyles.fontSize))
    combinedStyles['lineHeight'] = sizes.lineHeight.medium
  }
  return combinedStyles
}

export const configureTheme = (config: ThemeTypes.Config) => {
  const root = document.documentElement
  if (root && config) {
    if (config.palette) {
      objectEntries(config.palette).forEach(([variant, palette]) => {
        const paletteColors = palette.main ? Color(palette.main).palette : palette
        objectEntries(paletteColors).forEach(([paletteType, color]) => {
          root.style.setProperty(
            getVarName(variant, paletteType),
            palette[paletteType] || color,
          )
        })
      })
    }

    if (config.component) {
      objectEntries(config.component).forEach(([component, properties]) => {
        if (properties.fontSize && !properties.lineHeight) {
          properties['lineHeight'] = properties.fontSize
        }
        objectEntries(properties).forEach(([property, value]) => {
          const varName = getVarName(component, property)
          if (sizedProperties.includes(property)) {
            const sizes = getSize(Number(value))
            const sizedValue = sizes[property as keyof typeof sizes]
            setRootStyle(varName, sizedValue.medium.toString())
            setRootStyle(varName + '-small', sizedValue.small.toString())
            setRootStyle(varName + '-large', sizedValue.large.toString())
          } else {
            setRootStyle(varName, appendUnit(property, value))
          }
        })
      })
    }

    const bodyStyles = getCombinedStyles(defaultBodyStyles, config.bodyStyles)
    const bodyElement = document.querySelector('style[data-kreattix-styles="true"]')
    if (!bodyElement) {
      document.head.innerHTML += `<style data-kreattix-styles="true">${stringifyStyles('body', bodyStyles)}</style>`
    }

    const rootStyles = getCombinedStyles(defaultRootStyles, config.rootStyles)
    objectEntries(rootStyles).forEach(([key, value]) => {
      const property = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
      setRootStyle(property, appendUnit(key, value))
    })
  }
}
