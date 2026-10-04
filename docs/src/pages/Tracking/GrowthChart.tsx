import { data } from './trackingData'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

 const GrowthChart: React.FC = ({ defaultIndex } : { defaultIndex?: number }) => {
    return (
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
            <Bar dataKey="Development" stackId="a" radius={25} fill={'red'} />
            <Bar dataKey="Production" stackId="a" radius={25} fill={'blue'} />
          </BarChart>
    )
 }

 export default GrowthChart;