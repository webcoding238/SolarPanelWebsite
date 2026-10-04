type TimelineDataType = {
  name: string;
  type: string;
  outcome: 'success' | 'error' | 'pending';
  Development: [number, number];
  Production: [number, number];
}

export const data: Array<TimelineDataType> = [
  {
    name: 'Japan',
    type: 'TR',
    outcome: 'success',
    Development: [1980, 2019],
    Production: [1954, 2026],
  },
  {
    name: 'United Stated of America',
    type: 'MT',
    outcome: 'error',
    Development: [1954, 1991],
    Production: [2019, 2024],
  },
  {
    name: 'Australia',
    type: 'MT',
    outcome: 'success',
    Development: [1954, 1983],
    Production: [1991, 2025],
  },
  {
    name: 'China',
    type: 'MT',
    outcome: 'error',
    Development: [1912, 2019],
    Production: [1976, 2026],
  },
    {
    name: 'India',
    type: 'MT',
    outcome: 'success',
    Development: [1918, 2000],
    Production: [1976, 2026],
  }
]

export const rawData = `
100+,110838,476160
95-99,1141691,3389124
90-94,6038458,13078242
85-89,18342182,31348041
80-84,37166893,53013079
75-79,65570812,83217973
70-74,103998992,124048996
65-69,138182244,154357035
60-64,170525048,180992721
55-59,206686596,212285997
50-54,231342779,232097236
45-49,240153677,236696232
40-44,270991534,263180352
35-39,301744799,289424003
30-34,310384416,294303405
25-29,308889349,291429439
20-24,318912554,300510028
15-19,335882343,315258559
10-14,353666705,331681954
5-9,351991008,332121131
0-4,331889289,315450649
`
.trim()
  .split('\n')
  .map(line => {
    const [age, m, f] = line.split(',');
    return { age, male: Number(m), female: Number(f) };
  })

export const paragraphOne = 'In 1964 NASA, building upon previous inventions dating back to earlier than 1873, launched a satellite self-sufficient from solar power. In 1983 Prof. Martin Green of UNSW invented technology that is present in more than 90% of solar panels.'

export const paragraphTwo = `In the 2000's
          Japan's mainstream electronics corporations such as Mitsubishi and their peers manufactured a large portion of the solar panels used in residential early adapter regions such as Los Angeles. This marketshare tapered off around 2019, when manufacturing moved mostly to the USA and China. Now, the top 5 countries using residential solar power are United States of America, Japan, China, Australia and India. The U.S.A. produced more than 50% of their electricity in their grid from solar panels in 2023.`