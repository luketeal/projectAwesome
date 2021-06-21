var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return dayjs.utc(date).format('MM/DD/YYYY');
  },

  prefilled_date: (date) => {
      return dayjs.utc(date).format('YYYY-MM-DD');
    },
  }
