import LineChart from "./components/LineChart";

function App() {

  // 1. 데이터 정의
  const myData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'], // X축 이름표들
    datasets: [
      {
        label: '방문자 수', // 범례에 표시될 이름
        data: [500, 1000, 750, 200, 1500, 2000], // Y축 값들
        borderColor: 'rgb(255, 99, 132)', // 선 색상
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // 점의 배경색
        // tension을 주면 선을 둥글게 만들 수 있음 (0: 직선, 1: 부드러운 곡선)
      },
    ],
  };

  // 2. 옵션 정의 (차트 제목, 범례 위치 등을 설정)
  const myOptions = {
    responsive: true, // 부모 div 크기에 반응형으로 자동 조절
    plugins: {
      legend: {
        position: 'bottom', // 범례를 아래쪽에 표시
      },
      title: {
        display: true, // 제목 표시 여부
        text: '상반기 방문자 통계', // 차트 제목
      },
    },
    // 필요하면 scales로 Y축을 0부터 강제 시작시킬 수도 있음
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>대시보드</h1>

      <div style={{ width: '600px', margin: '0 auto' }}>
        {/* props로 데이터와 옵션을 던져줍니다 */}
        <LineChart chartData={myData} chartOptions={myOptions} />
      </div>
    </div>
  );
}

export default App;