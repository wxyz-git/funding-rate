import { calculateAnnualAPR, FundingRateFrequency } from '../src/utils/fundingRateCalculator';

describe('Funding Rate Calculator', () => {
  test('should calculate annual APR correctly for hourly funding rate', () => {
    // Given a 0.01% hourly funding rate
    const fundingRate = 0.01;
    const frequency = FundingRateFrequency.HOURLY;
    
    // When calculating the annual APR
    const apr = calculateAnnualAPR(fundingRate, frequency);
    
    // Then the result should be 0.01% * (365 * 24) = 87.6%
    expect(apr).toBeCloseTo(87.6, 1);
  });

  test('should calculate annual APR correctly for 8-hour funding rate', () => {
    // Given a 0.01% 8-hourly funding rate
    const fundingRate = 0.01;
    const frequency = FundingRateFrequency.EIGHT_HOURS;
    
    // When calculating the annual APR
    const apr = calculateAnnualAPR(fundingRate, frequency);
    
    // Then the result should be 0.01% * (365 * 24 / 8) = 10.95%
    expect(apr).toBeCloseTo(10.95, 2);
  });

  test('should calculate annual APR correctly for daily funding rate', () => {
    // Given a 0.01% daily funding rate
    const fundingRate = 0.01;
    const frequency = FundingRateFrequency.DAILY;
    
    // When calculating the annual APR
    const apr = calculateAnnualAPR(fundingRate, frequency);
    
    // Then the result should be 0.01% * 365 = 3.65%
    expect(apr).toBeCloseTo(3.65, 2);
  });

  test('should handle negative funding rates', () => {
    // Given a -0.005% hourly funding rate
    const fundingRate = -0.005;
    const frequency = FundingRateFrequency.HOURLY;
    
    // When calculating the annual APR
    const apr = calculateAnnualAPR(fundingRate, frequency);
    
    // Then the result should be -0.005% * (365 * 24) = -43.8%
    expect(apr).toBeCloseTo(-43.8, 1);
  });

  test('should handle zero funding rate', () => {
    // Given a 0% funding rate
    const fundingRate = 0;
    const frequency = FundingRateFrequency.DAILY;
    
    // When calculating the annual APR
    const apr = calculateAnnualAPR(fundingRate, frequency);
    
    // Then the result should be 0%
    expect(apr).toBe(0);
  });
}); 