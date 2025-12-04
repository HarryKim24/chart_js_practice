import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ chartData, chartOptions }) => {
  if (!chartData) return <div>로딩 중...</div>;
  return <Doughnut data={chartData} options={chartOptions} />;
};

export default DoughnutChart;