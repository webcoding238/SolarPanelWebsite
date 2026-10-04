import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import {
  percentageData,
  formatPercent,
  itemSorter
 } from './Rechart'

 const AgeChart: React.FC = ({ defaultIndex }: { defaultIndex?: number }) => {
    return (
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
    )
 }

 export default AgeChart;