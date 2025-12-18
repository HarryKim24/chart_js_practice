export default function PortfolioSummary({ data }) {
  const invested = data.reduce((s, d) => s + d.invested, 0);
  const current = data.reduce((s, d) => s + d.current, 0);
  const profit = current - invested;
  const rate = (profit / invested) * 100;

  return (
    <div className="summary">
      <div>총 투자금: {invested.toLocaleString()} 원</div>
      <div>총 평가금: {current.toLocaleString()} 원</div>
      <div className={profit >= 0 ? 'plus' : 'minus'}>
        총 수익: {profit.toLocaleString()} 원 ({rate.toFixed(2)}%)
      </div>
    </div>
  );
}