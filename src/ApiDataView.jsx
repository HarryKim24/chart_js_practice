import React, { useState, useEffect } from 'react';
import axios from 'axios'; // API 통신 라이브러리
import LineChart from './components/LineChart'; // 만들어둔 부품 재사용

const ApiDataView = () => {
  // 데이터가 오기 전에는 null 상태
  const [bitcoinData, setBitcoinData] = useState(null);

  // [useEffect] 컴포넌트가 처음 화면에 뜰 때 딱 한 번 실행됨 ([])
  useEffect(() => {
    const fetchBitcoin = async () => {
      try {
        // 1. 코인게코 API 호출 (지난 7일간 비트코인 원화 가격)
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=krw&days=7'
        );
        const prices = res.data.prices; // [[타임스탬프, 가격], ...] 형태
        
        // 2. 데이터 가공 (Mapping)
        // API가 준 날짜는 숫자(타임스탬프)라서 보기 좋게 날짜 문자열로 변환
        const labels = prices.map(p => {
            const date = new Date(p[0]);
            return `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}시`;
        });
        // 가격 데이터만 추출
        const dataValues = prices.map(p => p[1]);

        // 3. 차트가 좋아하는 모양으로 State 저장
        setBitcoinData({
          labels: labels,
          datasets: [
            {
              label: '비트코인 시세 (KRW)',
              data: dataValues,
              borderColor: '#f7931a', // 비트코인 상징색(오렌지)
              backgroundColor: 'rgba(247, 147, 26, 0.1)', // 채우기 색
              fill: true, // 선 아래쪽을 색칠할지 여부
              pointRadius: 0, // 점을 숨겨서 선만 깔끔하게 표시
              tension: 0.2, // 곡선 부드러움 정도
            },
          ],
        });
      } catch (err) {
        console.error("API 에러 발생:", err);
      }
    };

    fetchBitcoin(); // 함수 실행
  }, []);

  const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: '실시간 비트코인 시세 (API)' }
    },
    scales: { x: { display: false } } // X축 라벨이 너무 많아서 숨김 처리
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '15px' }}>
      <h2>📡 2. API 데이터 (심화)</h2>
      <p>외부 API(CoinGecko)에서 데이터를 받아와서 LineChart에 넣어줍니다.</p>
      
      <div style={{ height: '400px' }}>
        {/* 데이터가 로딩되면 차트를 그리고, 아니면 로딩 문구 표시 (조건부 렌더링) */}
        {bitcoinData ? (
          <LineChart chartData={bitcoinData} chartOptions={options} />
        ) : (
          <div style={{ textAlign: 'center', lineHeight: '300px' }}>데이터 로딩 중... ⏳</div>
        )}
      </div>
    </div>
  );
};

export default ApiDataView;