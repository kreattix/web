import { Color } from '@kreattix/colors'
import { ICSSProperties, StyleSheet, objectEntries } from '@kreattix/utils'

import { appPreffix, defaultBodyStyles, defaultRootStyles } from './constants'
import { ThemeTypes } from './types'

export const STYLE = StyleSheet(appPreffix)

export const initializeTheme = (config?: ThemeTypes.Config) => {
  const styleElement = document.querySelector('style[data-kreattix-styles="true"]')

  let themeStyles: ICSSProperties = {}

  if (config?.palette) {
    objectEntries(config.palette).forEach(([variant, palette]) => {
      const paletteColors = palette.main ? Color(palette.main).palette : palette
      objectEntries(paletteColors).forEach(([paletteType, color]) => {
        const key = STYLE.getVariableName(variant, paletteType)
        themeStyles[key] = palette[paletteType] || color
      })
    })
  }

  if (config?.component) {
    Object.entries(config?.component).forEach(([component, properties]) => {
      themeStyles = { ...themeStyles, ...STYLE.createVariables(properties, component) }
    })
  }

  const bodyStyles = STYLE.createCSS(
    { ...defaultBodyStyles, ...config?.bodyStyles },
    'body'
  )

  const manipulatedRootStyles = { ...defaultRootStyles, ...config?.rootStyles }
  if (manipulatedRootStyles.fontFamily) {
    manipulatedRootStyles['--font-family'] = manipulatedRootStyles.fontFamily
  }

  const rootStyles = STYLE.createCSS(manipulatedRootStyles, ':root')

  const componentStyles = STYLE.createCSS(themeStyles, ':root')
  if (!styleElement) {
    document.head.innerHTML += `
      <style data-kreattix-styles="true">${rootStyles}${bodyStyles}${componentStyles}</style>`.replace(
      /\n+/g,
      ' '
    )
  }
}
