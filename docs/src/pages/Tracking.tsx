import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, /*LegendPayload, BarShapeProps,*/ Rectangle } from 'recharts';
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import ChatWindow from '../navigation/ChatWindow'
import Trajectory from '../assets/Trajectory.svg'
import SolarImage from '../assets/SolarImage.png'

const trackingStyles = {
  main: {

  },
  backgroundImage: {
    backgroundImage: `url(${SolarImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    opacity: '0.35',
    zIndex: '-1000',
    position: 'fixed' as const
  },
  navPosition: {
    position: 'relative' as const,
    backgroundColor: 'white'
  },
  titleGrid: {
    height: '50px',
    width: '40vw',
    margin: '15px',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '100%',
    gap: '5px',
    position: 'relative' as const
  },
  titleIcon: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '2'
  },
  title: {
    paddingTop: '10px',
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    fontSize: '26px'
  },
   trackingSummary: {
    marginLeft: '5em',
    marginTop: '2em',
    fontSize: '24px',
    width: '38%',
    zIndex: '1000'
  },
    barTitle: {
    margin: '2em',
    textAlign: 'center' as const,
    alignItems: 'center',
    fontSize: '28px'
  },
  homeGraph: {
    margin: 'auto',
    padding: '3em',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '70%'
  }
}

type TimelineDataType = {
  name: string;
  type: string;
  outcome: 'success' | 'error' | 'pending';
  Development: [number, number];
  Production: [number, number];
}

const data: Array<TimelineDataType> = [
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

const getBarColor = (outcome: TimelineDataType['outcome']) => {
  switch (outcome) {
    case 'success':
      return 'blue';
    case 'error':
      return 'red';
    default:
      return 'grey';
  }
}

const CustomFillRectangle = (props: any /*BarShapeProps*/) => {
  const { outcome } = props;
  return <Rectangle {...props} fill={getBarColor(outcome)} />;
}

const ActiveRectangle = (props: any /*BarShapeProps*/) => {
  return <CustomFillRectangle {...props} stroke="orange" strokeWidth={3} />;
}

const rawData = `
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
  });

const totalPopulation: number = rawData.reduce((sum, entry) => sum + entry.male + entry.female, 0);

const percentageData = rawData.map(entry => {
  return {
    age: entry.age,
    male: (entry.male / totalPopulation) * -100,
    female: (entry.female / totalPopulation) * 100,
  };
});

function formatPercent(val: any /*RenderableText | TooltipValueType*/): string {
  return `${Math.abs(Number(val)).toFixed(1)}%`;
}

function itemSorter(item: any /*LegendPayload*/): number {
  return item.value === 'Male' ? 0 : 1;
}

const Tracking: React.FC = ({ defaultIndex }: { defaultIndex?: number }) => {

  return (
    <>
      <main style={trackingStyles.main}>
        <img src={SolarImage}
          style={trackingStyles.backgroundImage}
          alt="Photograph of a sloped rooftop with solar panels"
          />
        <div style={trackingStyles.navPosition}>
          <Navigation />
        </div>
        <div style={trackingStyles.titleGrid}>
          <div style={trackingStyles.titleIcon}>
            <img
              src={Trajectory}
              alt="Cartoon outline of schedule calendar"
              width='100' height='60'
              />
          </div>
          <div style={trackingStyles.title}>Chronology of Solar Panels</div>
        </div>
        <div style={trackingStyles.trackingSummary}>
          In 1964 NASA, building upon previous inventions dating back to earlier than 1873,
          launched a satellite self-sufficient from solar power. In 1983 Prof. Martin Green of UNSW
          invented technology that is present in more than 90% of solar panels.
          <br/><br/>
          In the 2000's
          Japan's mainstream electronics corporations such as Mitsubishi and their
          peers manufactured a large portion of the solar panels used in residential early adapter
          regions such as Los Angeles. This marketshare tapered off around 2019, when
          manufacturing moved mostly to the USA and China. Now, the top 5 countries
          using residential solar power are United States of America, Japan, China, Australia and India.
          The U.S.A. produced more than 50% of their electricity in their
          grid from solar panels in 2023.
        </div>
        <ChatWindow />
        <div style={trackingStyles.barTitle}>
          Residental Solar Panel Periods of Continued Growth
        </div>
        <div style={trackingStyles.homeGraph}>
          <BarChart
            layout="vertical"
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{ bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <Tooltip shared={false} defaultIndex={defaultIndex} />
            <XAxis 
              type="number"
              domain={[1850, 2050]}
              dataKey="development"
              height={50} 
              label={{ value: 'Fictional data', position: 'insideBottomRight' as const}}
              />
            <YAxis
              type="category" 
              dataKey="name" 
              width="auto"
              label={{
                value: 'Fictional data',
                angle: -90,
                position: 'insideTopLeft' as const,
                textAnchor: 'end',
              }}
            />
            <Bar dataKey="Development" stackId="a" radius={25} shape={CustomFillRectangle} activeBar={ActiveRectangle} />
            <Bar dataKey="Production" stackId="a" radius={25} shape={CustomFillRectangle} activeBar={ActiveRectangle} />
          </BarChart>
        </div>
        <div style={trackingStyles.barTitle}>
          Percentage of World Population By Age - Present Day - <br/>Who Will Consume More Than 65% of Their Electricity From Solar Power
        </div>
        <div style={trackingStyles.homeGraph}>
          <BarChart
            data={percentageData}
            layout="vertical"
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1 }}
            responsive
            stackOffset="sign"
            barCategoryGap={1}
          >
            <XAxis
              type="number"
              domain={[-10, 10]}
              tickFormatter={formatPercent}
              height={50}
              label={{
                value: '% of total population',
                position: 'insideBottom' as const,
              }}
            />
            <YAxis
              width="auto"
              type="category"
              dataKey="age"
              name="Age group"
              label={{
                value: 'Age group',
                angle: -90,
                position: 'insideLeft' as const,
                offset: 10,
              }}
            />
            <Bar
              stackId="age"
              name="Female"
              dataKey="female"
              fill="#ed7485"
              radius={[0, 5, 5, 0]}
              label={{ position: 'right' as const, formatter: formatPercent }}
            />
            <Bar
              stackId="age"
              name="Male"
              dataKey="male"
              fill="#6ea1c7"
              radius={[0, 5, 5, 0]}
              label={{ position: 'right' as const, formatter: formatPercent }}
            />
            <Tooltip formatter={formatPercent} defaultIndex={defaultIndex} />
            <Legend itemSorter={itemSorter} verticalAlign="top" align="right" />
          </BarChart>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Tracking