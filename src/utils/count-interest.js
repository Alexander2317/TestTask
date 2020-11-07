// @flow

import BigNumber from 'bignumber.js'

import { bignumberConfig } from '../config'

const PERCENT = 100

type CountInterestProps = {
  value: string | number,
  percent: string | number,
}

const countInterest = ({ value, percent }: CountInterestProps): number =>
  new BigNumber(value)
    .multipliedBy(percent)
    .div(PERCENT)
    .toFormat(bignumberConfig.base.DECIMAL_PLACES)

export default countInterest
