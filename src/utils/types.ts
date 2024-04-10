import { Palette } from '@kreattix/colors'
import { CSSProperties } from 'react'

import { ThemeBorderRadius, ThemeColors, ThemeFontWeights, ThemeSizes } from './constants'

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export type SizeTypes = keyof typeof ThemeSizes
export type ThemeColorTypes = keyof typeof ThemeColors
export type FontWeightTypes = keyof typeof ThemeFontWeights
export type BorderRadiusTypes = keyof typeof ThemeBorderRadius
export type PaletteTypes = typeof Palette.gray
export type CSSPropertyNames = keyof CSSProperties

export declare namespace ThemeTypes {
  interface Components {
    text: CSSProperties
  }
  interface Config {
    bodyStyles?: CSSProperties
    component?: Components
    palette?: Record<ThemeColorTypes, PaletteTypes>
    rootStyles?: CSSProperties
  }
}

export type ComponentName = keyof ThemeTypes.Components
