import BigNumber from 'bignumber.js'

import { bignumberConfig } from '../config'

const PERCENT = 100
const countInterest = ({ value, percent }) =>
  new BigNumber(value)
    .multipliedBy(percent)
    .div(PERCENT)
    .toFormat(bignumberConfig.base.DECIMAL_PLACES)

export default countInterest
