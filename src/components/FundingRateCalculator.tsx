import React, { useState } from 'react';
import { calculateAnnualAPR, FundingRateFrequency } from '../utils/fundingRateCalculator';

const FundingRateCalculator: React.FC = () => {
  const [fundingRate, setFundingRate] = useState<string>('');
  const [frequency, setFrequency] = useState<FundingRateFrequency>(FundingRateFrequency.EIGHT_HOURS);
  const [annualAPR, setAnnualAPR] = useState<number | null>(null);

  const handleCalculate = () => {
    const parsedRate = parseFloat(fundingRate);
    
    if (!isNaN(parsedRate)) {
      const apr = calculateAnnualAPR(parsedRate, frequency);
      setAnnualAPR(apr);
    }
  };

  return (
    <div className="calculator">
      <h2>Funding Rate to APR Calculator</h2>
      
      <div className="form-group">
        <label htmlFor="fundingRate">Funding Rate (%)</label>
        <input
          type="number"
          id="fundingRate"
          value={fundingRate}
          onChange={(e) => setFundingRate(e.target.value)}
          placeholder="Enter funding rate percentage (e.g., 0.01)"
          step="0.001"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="frequency">Frequency</label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(parseInt(e.target.value) as FundingRateFrequency)}
        >
          <option value={FundingRateFrequency.HOURLY}>1 Hour</option>
          <option value={FundingRateFrequency.EIGHT_HOURS}>8 Hours</option>
          <option value={FundingRateFrequency.DAILY}>24 Hours (Daily)</option>
        </select>
      </div>
      
      <button onClick={handleCalculate}>Calculate APR</button>
      
      {annualAPR !== null && (
        <div className="result">
          <h3>Annual APR</h3>
          <div className="result-value">{annualAPR.toFixed(2)}%</div>
          <p>Based on {fundingRate}% funding rate every {frequency} hour(s)</p>
        </div>
      )}
    </div>
  );
};

export default FundingRateCalculator; 