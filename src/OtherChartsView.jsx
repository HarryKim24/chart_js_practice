import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";

const OtherChartsView = () => {

  const frameworkData = {
    labels: ['React', 'Vue', 'Angular', 'Svelte', 'Others'],
    datasets: [
      {
        label: '선호도 (%)',
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // React (Red)
          'rgba(54, 162, 235, 0.6)', // Vue (Blue)
          'rgba(255, 206, 86, 0.6)', // Angular (Yellow)
          'rgba(75, 192, 192, 0.6)', // Svelte (Green)
          'rgba(153, 102, 255, 0.6)', // Others (Purple)
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'right' }, // 범례를 오른쪽에 배치
      title: { display: true, text: '프론트엔드 프레임워크 점유율' },
    },
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '15px' }}>
      <h2>🍩 3. 비율 데이터 (Pie & Doughnut)</h2>
      <p>비율을 비교할 때는 파이 차트나 도넛 차트가 효과적입니다.</p>

      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', height: '300px' }}>
        {/* 파이 차트 */}
        <div style={{ width: '300px' }}>
            <h4 style={{textAlign:'center'}}>Pie Chart</h4>
            <PieChart chartData={frameworkData} chartOptions={options} />
        </div>

        {/* 도넛 차트 */}
        <div style={{ width: '300px' }}>
            <h4 style={{textAlign:'center'}}>Doughnut Chart</h4>
            <DoughnutChart chartData={frameworkData} chartOptions={options} />
        </div>
      </div>
    </div>
  )
}

export default OtherChartsView
