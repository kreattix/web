import { Palette } from '@kreattix/colors'
import { CSSProperties } from 'react'

import { TextProps } from '../components/text/types'
import { ThemeBorderRadius, ThemeColors, ThemeFontWeights, ThemeSizes } from './constants'

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export type SizeTypes = keyof typeof ThemeSizes
export type ThemeColorTypes = keyof typeof ThemeColors
export type FontWeightTypes = keyof typeof ThemeFontWeights
export type BorderRadiusTypes = keyof typeof ThemeBorderRadius
export type PaletteTypes = typeof Palette.gray
export type CSSPropertyNames = keyof CSSProperties
export type ComponentStyleTypes = Record<string, string | number>

export declare namespace ThemeTypes {
  interface Components {
    display: TextProps
    heading: TextProps
    paragraph: TextProps
    label: TextProps
    title: TextProps
    span: Partial<TextProps>
  }
  interface Config {
    bodyStyles?: CSSProperties
    component?: Components
    palette?: Record<ThemeColorTypes, PaletteTypes>
    rootStyles?: CSSProperties
  }
}

export type ComponentNameType = keyof ThemeTypes.Components
