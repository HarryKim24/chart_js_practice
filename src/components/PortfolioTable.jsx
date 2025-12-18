export default function PortfolioTable({
  data,
  selectedSymbol,
  onSelect,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>코인</th>
          <th>보유 수량</th>
          <th>평단가</th>
          <th>현재가</th>
          <th>수익</th>
          <th>수익률</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          const isActive = item.symbol === selectedSymbol;

          return (
            <tr
              key={item.symbol}
              onClick={() => onSelect(item.symbol)}
              style={{
                backgroundColor: isActive
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'transparent',
                cursor: 'pointer',
              }}
            >
              <td>{item.symbol} - {item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.avgPrice.toLocaleString()} 원</td>
              <td>{item.currentPrice.toLocaleString()} 원</td>
              <td style={{ color: item.profit >= 0 ? '#ff4d4f' : '#1890ff' }}>
                {item.profit.toLocaleString()} 원
              </td>
              <td style={{ color: item.profitRate >= 0 ? '#ff4d4f' : '#1890ff' }}>
                {item.profitRate.toFixed(2)}%
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}