import LocalDataView from './LocalDataView';
import ApiDataView from './ApiDataView';
import OtherChartsView from './OtherChartsView';
import StudyChart from './components/StudyChart';
// 1. 새로 만들 컴포넌트를 여기에 import 하세요 (아직 안 만들었으니 주석 처리)
// import StudyChart from './components/StudyChart';

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        React Chart.js 대시보드
      </h1>
      
      {/* <LocalDataView /> */}
      {/* <br /> */}
      
      {/* <ApiDataView /> */}
      {/* <br /> */}
      
      {/* <OtherChartsView /> */}


      {/* ▼ 여기에 Level 1 미션 컴포넌트를 넣으시면 됩니다! */}
      
      <div style={{ border: '2px dashed black', padding: '20px' }}>
        <StudyChart />
      </div>

    </div>
  );
}

export default App;