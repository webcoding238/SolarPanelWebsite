import { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import ChatWindow from '../../navigation/ChatWindow'
import {
  usaData,
  chinaData,
  southAsiaPacificData,
  europeData,
  africaData,
  greaterAsiaData,
  southAmericaData,
  chartData
} from './countryData'
import regionsStyles from './RegionStyles'

interface chartDataType { name: string; DebtRunEnterprises: number; ProfitRunEnterprises: number, amt: number }

const Regions: React.FC = () => {

  const [currentData, setCurrentData] = useState<string>('U.S.A.')
  const [data, updateData] = useState<chartDataType[]>(chartData)

  const selectUSA = () => {
    updateData(usaData)
    setCurrentData('U.S.A.')
  }

  const selectChina = () => {
    updateData(chinaData)
    setCurrentData('China')
  }

  const selectSouthAsiaPacific = () => {
    updateData(southAsiaPacificData)
    setCurrentData('South Asia Pacific')
  }

  const selectEurope = () => {
    updateData(europeData)
    setCurrentData('Europe')
  }

  const selectAfrica = () => {
    updateData(africaData)
    setCurrentData('Africa')
  }

  const selectGreaterAsia = () => {
    updateData(greaterAsiaData)
    setCurrentData('Greater Asia')
  }

  const selectSouthAmerica = () => {
    updateData(southAmericaData)
    setCurrentData('South America')
  }

  return (
    <main>
      <ChatWindow />
      <div style={regionsStyles.barTitle}>
        {currentData} Debt-Driven Solar Industry versus Profit Driven Solar Industry
      </div>
      <div style={regionsStyles.regionFlex}>
        <label>Choose Region - </label>
        <button onClick={() => selectUSA()}>U.S.A.</button>
        <button onClick={() => selectChina()}>China</button>
        <button onClick={() => selectSouthAsiaPacific()}>South Asia Pacific</button>
        <button onClick={() => selectEurope()}>Europe</button>
        <button onClick={() => selectAfrica()}>Africa</button>
        <button onClick={() => selectGreaterAsia()}>Greater Asia</button>
        <button onClick={() => selectSouthAmerica()}>SouthAmerica</button>
      </div>
      <div style={regionsStyles.homeGraph}>
          <LineChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
              top: 15,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" width="auto" />
            <YAxis yAxisId="right" orientation="right" width="auto" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="ProfitRunEnterprises" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="DebtRunEnterprises" stroke="#82ca9d" />
          </LineChart>
      </div>
    </main>
  )
}

export default Regions