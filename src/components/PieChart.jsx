import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// [중요] 파이/도넛 차트는 'ArcElement'를 등록해야 합니다.
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartData, chartOptions }) => {
  if (!chartData) return <div>로딩 중...</div>;
  return <Pie data={chartData} options={chartOptions} />;
};

export default PieChart;