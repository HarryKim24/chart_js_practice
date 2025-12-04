import ApiDataView from "./ApiDataView";
import LocalDataView from "./LocalDataView";


function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        React Chart.js 학습 노트 📝
      </h1>

      {/* 1. 로컬 데이터 섹션 */}
      <LocalDataView />

      <br />
      
      {/* 2. API 데이터 섹션 */}
      <ApiDataView />
    </div>
  );
}

export default App;