import BigNumber from 'bignumber.js'

import * as locales from './locales-format'

function setBignumberLocale(locale = 'en') {
  BigNumber.config({
    DECIMAL_PLACES: 20,
    EXPONENTIAL_AT: 20,
    ERRORS: process.env.NODE_ENV !== 'production',
    FORMAT: locales[locale],
  })
}

export default setBignumberLocale
