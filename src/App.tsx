import './App.css'
import LineChart from './components/LineChart'

function App() {

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React Chart.js 실습</h1>

      <div style={{ width: '800px', height: '400px', margin: '0 auto' }}>
        <LineChart />
      </div>
    </div>
  )
}

export default App
