import LocalDataView from './LocalDataView';
import ApiDataView from './ApiDataView';
import OtherChartsView from './OtherChartsView';

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        React Chart.js 대시보드
      </h1>

      <LocalDataView />
      <br />
      <ApiDataView />
      <br />
      <OtherChartsView />
    </div>
  );
}

export default App;