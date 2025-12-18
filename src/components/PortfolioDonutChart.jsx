import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const COLOR_MAP = {
  BTC: '#f7931a',
  ETH: '#627eea',
  DOGE: '#c2a633',
  ONDO: '#2bb673',
};

const PortfolioDonutChart = ({
  data, selectedSymbol, onSelect
}) => {

  const total = data.reduce((sum, d) => sum + d.current, 0);

  const chartData = {
    labels: data.map(d => d.symbol),
    datasets: [
      {
        data: data.map(d => d.current),
        backgroundColor: data.map(d => {
          const baseColor = COLOR_MAP[d.symbol] || '#999';
          if (!selectedSymbol || d.symbol === selectedSymbol) return baseColor;
          return `${baseColor}55`;
        }),
        offset: ctx => {
          const symbol = data[ctx.dataIndex].symbol;
          const isSelected = symbol === selectedSymbol;
          const isHover = ctx.active;

          if (isSelected && isHover) return 58;
          if (isSelected) return 50;
          if (isHover) return 8;
          return 0;
        },
        borderWidth: 2,
        borderColor: '#111',
      },
    ],
  }

  const options = {
    cutout: '65%',
    onClick: (_, elements) => {
      if (!elements.length) return;
      const index = elements[0].index;
      onSelect(data[index].symbol);
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx =>
            `${((ctx.raw / total) * 100).toFixed(2)}%`,
        },
      },
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div>
      <h3>보유 종목 분포</h3>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default PortfolioDonutChart
