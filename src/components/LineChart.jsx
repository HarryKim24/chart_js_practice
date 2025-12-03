import { Line } from 'react-chartjs-2'; // 리액트 차트 컴포넌트 (React용 Chart.js wrapper)
import {
  Chart as ChartJS,
  CategoryScale, // X축을 그리는 도구
  LinearScale,   // Y축을 그리는 도구
  PointElement,  // 선 위에 찍히는 동그란 점
  LineElement,   // 점과 점을 잇는 선
  Title,         // 차트 제목
  Tooltip,       // 마우스 호버 시 설명
  Legend,        // 범례(데이터 이름 표시)
} from 'chart.js';

// Chart.js 엔진에 사용할 기능들을 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartData, chartOptions }) => {
  
  // 데이터가 아직 안 넘어왔을 때 에러 방지
  if (!chartData) return <div>로딩 중...</div>;

  // data: 필수, options: 선택 (안 주면 기본값 적용)
  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;