/**
 * Funding rate frequencies in hours
 */
export enum FundingRateFrequency {
  HOURLY = 1,
  EIGHT_HOURS = 8,
  DAILY = 24,
}

/**
 * Calculate annual APR from funding rate percentage and frequency
 * @param fundingRatePercentage - The funding rate percentage (e.g., 0.01 for 0.01%)
 * @param frequency - The frequency of the funding rate in hours
 * @returns The annual APR as a percentage
 */
export function calculateAnnualAPR(
  fundingRatePercentage: number,
  frequency: FundingRateFrequency
): number {
  // Calculate how many funding events occur in a year
  const hoursInYear = 365 * 24;
  const fundingEventsPerYear = hoursInYear / frequency;
  
  // Calculate the annual APR
  const annualAPR = fundingRatePercentage * fundingEventsPerYear;
  
  return annualAPR;
} 