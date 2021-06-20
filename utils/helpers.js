var dayjs = require('dayjs')

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  prefilled_date: (date) => {
      return dayjs(date).format('YYYY-MM-DD');
    },
  }
