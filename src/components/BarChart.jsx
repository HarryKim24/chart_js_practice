import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ chartData, chartOptions }) => {

  if (!chartData) return <div>로딩 중...</div>;

  return (
    <Bar data={chartData} options={chartOptions} />
  )
}

export default BarChart
