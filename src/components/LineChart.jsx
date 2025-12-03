import { Line } from 'react-chartjs-2'; // 리액트 컴포넌트
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register( // 차트 엔진에 등록
  CategoryScale, // X축을 그리는 도구
  LinearScale, // Y축을 그리는 도구
  PointElement, // 선 위에 찍히는 동그란 점
  LineElement, // 점과 점을 잇는 선
  Title, // 차트 제목
  Tooltip, // 마우스 호버 시 나오는 설명
  Legend // 범례(어떤 색이 무슨 데이터인지 표시)
);

const SalesChart = () => {

  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'], // X축 이름표들
    datasets: [ // 그래프로 그려질 데이터 묶음 (하나의 차트에 여러 개의 선을 그릴 수 있음)
      {
        label: '2025년 매출', // 범례에 뜰 이름
        data: [12, 19, 3, 5, 2, 3], // Y축 높이값 (labels 개수와 같아야 함)
        borderColor: 'rgb(75, 192, 192)', // 선 색상
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // 점의 배경색
        tension: 0.1, // 선의 굴곡 (0: 완전 직선, 1에 가까울수록: 둥근 곡선)
      },
      // 선을 더 추가하고 싶으면 여기에 {} 객체 추가
    ],
  };

  const options = {
    responsive: true, // 부모 div 크기에 맞춰 차트 크기 자동 조절(반응형)
    plugins: { // 제목, 범례 같은 부가 기능들
      legend: {
        position: 'top', // 범례를 차트 위쪽에 표시 ('bottom', 'left' 등)
      },
      title: {
        display: true, // 제목을 보일지 여부
        text: '월별 매출 라인 차트',  // 제목 텍스트
      },
    },
    // Y축을 0부터 시작하게 강제하고 싶을 시 scales 설정 추가
  };

  return <Line data={data} options={options} />; // data: 필수, options: 선택 (안주면 기본값)
};

export default SalesChart;