import { Bar } from 'react-chartjs-2'; // Line 대신 Bar를 가져옵니다.
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement, // [중요] 막대그래프는 LineElement 대신 BarElement가 필요합니다.
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// 사용할 부품 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, // 등록 필수!
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ chartData, chartOptions }) => {
  if (!chartData) return <div>데이터 로딩 중...</div>;

  // <Bar> 컴포넌트를 리턴합니다.
  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;