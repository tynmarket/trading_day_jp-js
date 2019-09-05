const holiday_jp = require('@holiday-jp/holiday_jp');

const openDay = 4 // 大発会
const closeDay = 30 // 大納会

const opening = function(date) {
  const openDate = new Date(date.getFullYear(), 0, 4) // 大発会
  const closeDate = new Date(date.getFullYear(), 11, 30) // 大納会
  const day = date.getDay();

  return day != 0 && day != 6 && date >= openDate && date <= closeDate;
};

const tradingDayJp = {
  isTradingDay: function(date) {
    return !holiday_jp.isHoliday(date) && opening(date);
  },
};

module.exports = tradingDayJp;
