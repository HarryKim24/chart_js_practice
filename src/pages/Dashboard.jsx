import { portfolio } from '../data/mockPortfolio';
import { enrichPortfolio } from '../utils/portfolioCalc';
import PortfolioDonutChart from '../components/PortfolioDonutChart';
import PortfolioTable from '../components/PortfolioTable';
import PortfolioSummary from '../components/PortfolioSummary';
import { useMemo, useState } from 'react';

const Dashboard = () => {

  const data = useMemo(() => enrichPortfolio(portfolio), []);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <div className="dashboard">
      <div className="left">
        <PortfolioDonutChart
          data={data}
          selectedSymbol={selectedSymbol}
          onSelect={setSelectedSymbol}
        />
      </div>

      <div className="right" style={{ display: 'flex', gap: 20 }}>
        <PortfolioSummary data={data} />
        <PortfolioTable
          data={data}
          selectedSymbol={selectedSymbol}
          onSelect={setSelectedSymbol}
        />
      </div>
    </div>
  )
}

export default Dashboard
