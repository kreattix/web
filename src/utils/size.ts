import { SizeTypes } from './types'

export function getSize(size: number, returnInPixels = true) {
  let currentSize = size

  function _getDiff(value: number, differByAmount: number) {
    const amount = Math.ceil(value / differByAmount)
    return (amount > 1 ? 2 * Math.ceil(amount / 2) : amount) * 2
  }

  const sizeWithUnit = (size: number) => (returnInPixels ? size + 'px' : size)

  function _getSizes(diff: number): Record<SizeTypes, string | number> {
    return {
      large: sizeWithUnit(currentSize + diff),
      medium: sizeWithUnit(currentSize),
      small: sizeWithUnit(currentSize - diff)
    }
  }

  return {
    get borderRadius() {
      const diff = _getDiff(currentSize, 10)
      return _getSizes(diff)
    },
    get fontSize() {
      const diff = _getDiff(currentSize, 20)
      return _getSizes(diff)
    },
    get lineHeight() {
      const diff = _getDiff(currentSize, 10)
      currentSize = size + diff
      return this.fontSize
    },
    get margin() {
      const diff = _getDiff(currentSize, 20)
      return _getSizes(diff)
    },
    get padding() {
      const diff = _getDiff(currentSize, 20)
      return _getSizes(diff)
    }
  }
}
