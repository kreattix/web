import { Palette } from '@kreattix/colors'
import { Theme } from '@kreattix/constants'
import { ICSSProperties } from '@kreattix/utils'

import { ComponentName } from '../configs'

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export type SizeTypes = keyof typeof Theme.Sizes
export type ThemeColorTypes = keyof typeof Theme.Colors
export type FontWeightTypes = keyof typeof Theme.FontWeights
export type BorderRadiusTypes = keyof typeof Theme.BorderRadius
export type PaletteTypes = typeof Palette.gray

export declare namespace ThemeTypes {
  type Components = Record<ComponentName, ICSSProperties>
  interface Config {
    bodyStyles?: ICSSProperties
    component?: Components
    palette?: Record<ThemeColorTypes, PaletteTypes>
    rootStyles?: ICSSProperties
    appPrefix?: string
  }
}
