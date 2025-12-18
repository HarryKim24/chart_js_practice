export function enrichPortfolio(portfolio) {
  return portfolio.map(item => {
    const invested = item.quantity * item.avgPrice;
    const current = item.quantity * item.currentPrice;
    const profit = current - invested;
    const profitRate = (profit / invested) * 100;

    return {
      ...item,
      invested,
      current,
      profit,
      profitRate,
    }
  })
}