import { Line } from 'react-chartjs-2'; // 리액트에서 쓰기 편하게 감싼 컴포넌트
import {
  Chart as ChartJS,
  CategoryScale, // X축 (문자열 라벨 등)
  LinearScale,   // Y축 (숫자 데이터)
  PointElement,  // 데이터 점
  LineElement,   // 데이터 선
  Title,         // 차트 제목
  Tooltip,       // 마우스 올렸을 때 뜨는 정보
  Legend,        // 범례 (데이터 이름)
} from 'chart.js';

// [중요] Chart.js는 'Tree Shaking'을 위해 필요한 부품만 쏙쏙 골라서 등록해야 합니다.
// 이걸 안 하면 "Scale is not registered" 같은 에러가 납니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// props로 부모에게서 데이터(chartData)와 옵션(chartOptions)을 받아옵니다.
const LineChart = ({ chartData, chartOptions }) => {
  
  // 데이터가 로딩 전이라 null일 경우 에러 방지용 (선택 사항)
  if (!chartData) return <div>데이터 로딩 중...</div>;

  // <Line> 컴포넌트에 data는 필수, options는 선택입니다.
  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;