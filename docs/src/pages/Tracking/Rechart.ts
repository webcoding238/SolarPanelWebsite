import { Rectangle } from 'recharts'
import { rawData } from './trackingData'

//code from the Rechart.js NPM package:

const totalPopulation: number = rawData.reduce((sum, entry) => sum + entry.male + entry.female, 0);

export const percentageData = rawData.map(entry => {
  return {
    age: entry.age,
    male: (entry.male / totalPopulation) * -100,
    female: (entry.female / totalPopulation) * 100,
  };
})

export function formatPercent(val: any): string {
  return `${Math.abs(Number(val)).toFixed(1)}%`;
}

export function itemSorter(item: any): number {
  return item.value === 'Male' ? 0 : 1;
}