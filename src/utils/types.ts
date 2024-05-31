import { Palette } from '@kreattix/colors'
import { ICSSProperties } from '@kreattix/utils'
import { CSSProperties } from 'react'

import {
  KreattixColors,
  ThemeBorderRadius,
  ThemeFontWeights,
  ThemeSizes
} from './constants'

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export type SizeTypes = keyof typeof ThemeSizes
export type ThemeColorTypes = keyof typeof KreattixColors
export type FontWeightTypes = keyof typeof ThemeFontWeights
export type BorderRadiusTypes = keyof typeof ThemeBorderRadius
export type PaletteTypes = typeof Palette.gray

export type ComponentNameType =
  | 'display'
  | 'heading'
  | 'paragraph'
  | 'label'
  | 'title'
  | 'span'
  | 'button'
export declare namespace ThemeTypes {
  type Components = Record<ComponentNameType, ICSSProperties>
  interface Config {
    bodyStyles?: CSSProperties
    component?: Components
    palette?: Record<ThemeColorTypes, PaletteTypes>
    rootStyles?: CSSProperties
  }
}
