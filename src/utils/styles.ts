import { css, CSSResultGroup } from 'lit'
import _ from 'lodash'

import { prefix } from '../config/kreattixConfig'

export function appendPixel(value?: number) {
  return !_.isEmpty(value) ? `${value}px` : value
}

export function getNumberForSize(value: number, differByAmount: number) {
  const amount = Math.ceil(value / differByAmount)
  const nearestEvenNumber = (amount > 1 ? 2 * Math.ceil(amount / 2) : amount) * 2
  return nearestEvenNumber
}

export function getSizes(value: unknown) {
  const size = _.isNumber(value) ? value : 0
  const numberForSize = getNumberForSize(size, 20)
  return {
    large: size + numberForSize,
    medium: size,
    small: size - numberForSize,
  }
}

export function getLineHeights(value: unknown) {
  const size = _.isNumber(value) ? value : 0
  const numberForSize = getNumberForSize(size, 10)
  return getSizes(size + numberForSize)
}

export function getVarName(componentName: string, varname?: string) {
  if (_.isEmpty(varname)) {
    return `--${prefix}-${componentName}`
  }
  return `--${prefix}-${componentName}-${varname}`
}

export function ifBLock(condition: boolean, styles: CSSResultGroup, elseStyles?: CSSResultGroup) {
  return condition ? styles : elseStyles || css``
}
