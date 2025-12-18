import LocalDataView from './LocalDataView';
import ApiDataView from './ApiDataView';
import OtherChartsView from './OtherChartsView';
import StudyChart from './components/StudyChart';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        React Chart.js 대시보드
      </h1>
      
      <div style={{ border: '2px dashed black', padding: '20px' }}>
        <Dashboard />
      </div>

    </div>
  );
}

export default App;