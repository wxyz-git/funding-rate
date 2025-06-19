import React from 'react';
import FundingRateCalculator from './components/FundingRateCalculator';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Funding Rate Calculator</h1>
        <p>Calculate annual APR from crypto funding rates</p>
      </header>
      
      <main>
        <FundingRateCalculator />
      </main>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Funding Rate Calculator - Quant Trading Tool</p>
      </footer>
    </div>
  );
}

export default App; 