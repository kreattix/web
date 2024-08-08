import { Color } from '@kreattix/colors'
import { appPrefix } from '@kreattix/constants'
import { ICSSProperties, ICSSValue, StyleSheet, objectEntries } from '@kreattix/utils'

import { DeepPartial, ThemeTypes } from './types'

export const STYLE = StyleSheet(appPrefix)

export const configureTheme = (config?: DeepPartial<ThemeTypes.Config>) => {
  let themeStyles: ICSSProperties = {}
  const styleSheet = StyleSheet(config?.appPrefix || appPrefix)

  if (config?.palette) {
    objectEntries(config.palette).forEach(([variant, palette]) => {
      if (!palette) return
      const paletteColors = palette.main ? Color(palette.main).palette : palette
      objectEntries(paletteColors).forEach(([paletteType, color]) => {
        const key = styleSheet.getVariableName(variant.toString(), paletteType.toString())
        const value = palette[paletteType] ?? color
        if (value !== undefined) {
          themeStyles[key] = value
        }
      })
    })
  }

  if (config?.component) {
    Object.entries(config?.component).forEach(([component, properties]) => {
      themeStyles = {
        ...themeStyles,
        ...styleSheet.createVariables(properties as ICSSProperties, component)
      }
    })
  }

  const bodyStyles = styleSheet.createCSS((config?.bodyStyles || {}) as ICSSProperties, 'body')

  const manipulatedRootStyles = config?.rootStyles ?? {}
  if (manipulatedRootStyles.fontFamily) {
    manipulatedRootStyles['--font-family'] = manipulatedRootStyles.fontFamily as ICSSValue
  }

  const rootStyles = styleSheet.createCSS(manipulatedRootStyles as ICSSProperties, ':root')
  const componentStyles = styleSheet.createCSS(themeStyles as ICSSProperties, ':root')

  const generatedStyles = `${rootStyles}${bodyStyles}${componentStyles}`.replace(/\n+/g, ' ')
  const styleElement = document.querySelector('style[data-kreattix-styles="true"]')
  if (!styleElement) {
    document.head.innerHTML += `
        <style data-kreattix-styles="true">${generatedStyles}</style>`
  } else {
    styleElement.innerHTML = generatedStyles
  }
}
