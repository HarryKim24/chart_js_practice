import React, { useState } from 'react';
// 우리가 만든 재사용 가능한 차트 부품을 가져옵니다. 경로(../../) 주의!
import BarChart from "./components/BarChart"; 
import LineChart from "./components/LineChart";

const LocalDataView = () => {
  // [State] 차트 데이터는 변할 수 있으므로 useState로 관리합니다.
  const [userData, setUserData] = useState({
    // X축 라벨 (가로축)
    labels: ['월', '화', '수', '목', '금', '토', '일'], 
    // 실제 데이터 셋 (배열 형태라 여러 개의 선/막대를 그릴 수 있음)
    datasets: [
      {
        label: '일일 방문자 수', // 범례 이름
        data: [10, 20, 15, 25, 30, 40, 35], // Y축 값
        // 막대 차트는 색상이 중요하므로 배열로 여러 색을 넣음
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ],
        borderColor: 'black', // 테두리 색
        borderWidth: 1,       // 테두리 두께
      },
    ],
  });

  // [이벤트] 버튼 클릭 시 데이터를 랜덤으로 바꾸는 함수
  const handleRandomize = () => {
    // 1. 새로운 데이터 배열 생성 (0~50 랜덤)
    const newData = userData.labels.map(() => Math.floor(Math.random() * 50));
    
    // 2. State 업데이트 (불변성 지키기 위해 객체 새로 생성)
    setUserData({
      ...userData, // 기존 labels 등은 유지
      datasets: [
        {
          ...userData.datasets[0], // 기존 색상 설정 등 유지
          data: newData, // 데이터만 교체!
        },
      ],
    });
  };

  // 차트 옵션 (모양, 범례 위치 등 설정)
  const options = {
    responsive: true, // 부모 div 크기에 맞춤
    plugins: {
      legend: { position: 'top' }, // 범례 위치
      title: { display: true, text: '주간 통계 (Local Data)' }, // 제목
    },
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '15px', marginBottom: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>📂 1. 로컬 데이터 (기초)</h2>
        <button onClick={handleRandomize} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          랜덤 변경 🎲
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* 왼쪽: 막대 차트 */}
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Bar Chart</h3>
          <BarChart chartData={userData} chartOptions={options} />
        </div>
        {/* 오른쪽: 라인 차트 (데이터 재사용!) */}
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Line Chart</h3>
          <LineChart chartData={userData} chartOptions={options} />
        </div>
      </div>
    </div>
  );
};

export default LocalDataView;