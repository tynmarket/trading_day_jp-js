# TradingDayJp for JavaScript

東証の営業日か判定するライブラリです。

[trading_day_jp](https://github.com/tynmarket/trading_day_jp)をJSに部分的に移植しました。

## Install

```sh
$ npm install trading_day_jp-js
```

## Usage

```javascript
const tradingDayJp = require('trading_day_jp-js');

const date1 = new Date(2019, 0, 3) // 大発会前日
console.log(tradingDayJp.isTradingDay(date1)) // false

const date2 = new Date(2019, 0, 4) // 大発会
console.log(tradingDayJp.isTradingDay(date1)) // true
```
