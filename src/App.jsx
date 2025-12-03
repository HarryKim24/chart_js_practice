import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {

  // 1. 데이터 정의
  const userData  = {
    labels: ['월', '화', '수', '목', '금', '토', '일'], // X축 이름표들
    datasets: [
      {
        label: '일일 방문자 수', // 범례에 표시될 이름
        data: [10, 20, 15, 25, 30, 40, 35], // Y축 값들
        borderColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ], // 선 색상
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  // 2. 옵션 정의 (차트 제목, 범례 위치 등을 설정)
  const options = {
    responsive: true, // 부모 div 크기에 반응형으로 자동 조절
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true, // 제목 표시 여부
        text: '주간 통계', // 차트 제목
      },
    },
    // 필요하면 scales로 Y축을 0부터 강제 시작시킬 수도 있음
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>차트 대시보드</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
        <div style={{ width: '500px' }}>
          <h3>막대 그래프 (Bar)</h3>
          <BarChart chartData={userData} chartOptions={options} />
        </div>

        <div style={{ width: '500px' }}>
          <h3>선 그래프 (Line)</h3>
          <LineChart chartData={userData} chartOptions={options} />
        </div>
      </div>
    </div>
  );
}

export default App;