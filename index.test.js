const tradingDayJp = require('./index');

// 大発会前日
test('2019/01/03は営業日でない', () => {
  const date = new Date(2019, 0, 3);

  expect(tradingDayJp.isTradingDay(date)).toBe(false);
});

// 大発会
test('2019/01/04は営業日', () => {
  const date = new Date(2019, 0, 4);

  expect(tradingDayJp.isTradingDay(date)).toBe(true);
});

// 祝日
test('2019/05/03は営業日でない', () => {
  const date = new Date(2019, 4, 3);

  expect(tradingDayJp.isTradingDay(date)).toBe(false);
});

// 平日
test('2019/05/07は営業日', () => {
  const date = new Date(2019, 4, 7);

  expect(tradingDayJp.isTradingDay(date)).toBe(true);
});

// 土曜日
test('2019/05/07は営業日でない', () => {
  const date = new Date(2019, 4, 11);

  expect(tradingDayJp.isTradingDay(date)).toBe(false);
});

// 日曜日
test('2019/05/07は営業日でない', () => {
  const date = new Date(2019, 4, 12);

  expect(tradingDayJp.isTradingDay(date)).toBe(false);
});

// 大納会
test('2019/12/30は営業日', () => {
  const date = new Date(2019, 11, 30);

  expect(tradingDayJp.isTradingDay(date)).toBe(true);
});

// 大納会翌日
test('2019/12/31は営業日でない', () => {
  const date = new Date(2019, 11, 31);

  expect(tradingDayJp.isTradingDay(date)).toBe(false);
});
