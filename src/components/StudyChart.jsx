import { Bar } from 'react-chartjs-2';

const StudyChart = () => {

  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '공부 시간(hr)', 
        data: [2, 4, 5, 1, 8, 10, 3],
        backgroundColor: '#845EC2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '주간 코딩 기록',
      },
      legend: {
        display: false,
      },
    },
    scales: {
        y: {
            beginAtZero: true 
        }
    }
  };

  return <Bar data={data} options={options} />;
};

export default StudyChart;