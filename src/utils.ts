import { Color } from '@kreattix/colors'
import { objectEntries } from '@kreattix/utils'

import { ThemeTypes } from './types'
import { defaultBodyStyles, defaultRootStyles, sizedProperties } from './utils/constants'
import { getSize } from './utils/size'
import {
  appendUnit,
  getCombinedStyles,
  getVarName,
  setRootStyle,
  stringifyStyles
} from './utils/theme'

export const initializeTheme = (config?: ThemeTypes.Config) => {
  const root = document.documentElement
  if (root && config) {
    if (config.palette) {
      objectEntries(config.palette).forEach(([variant, palette]) => {
        const paletteColors = palette.main ? Color(palette.main).palette : palette
        objectEntries(paletteColors).forEach(([paletteType, color]) => {
          root.style.setProperty(
            getVarName(variant, paletteType),
            palette[paletteType] || color
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
  }
  const bodyStyles = getCombinedStyles(defaultBodyStyles, config?.bodyStyles)
  const bodyElement = document.querySelector('style[data-kreattix-styles="true"]')
  if (!bodyElement) {
    document.head.innerHTML += `<style data-kreattix-styles="true">${stringifyStyles('body', bodyStyles)}</style>`
  }

  const rootStyles = getCombinedStyles(defaultRootStyles, config?.rootStyles)
  objectEntries(rootStyles).forEach(([key, value]) => {
    const property = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    setRootStyle(property, appendUnit(key, value))
  })
}
