import { useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import ChatWindow from '../../navigation/ChatWindow';
import { TitleTag } from '../../components/SharedTags';
import { countryList } from './countryData';
import regionsStyles from './RegionStyles';

interface chartDataType {
  name: string;
  DebtRunEnterprises: number;
  ProfitRunEnterprises: number,
  amt: number
}

interface CountryType {
  country: string,
  countryData: chartDataType[]
}

const Regions: React.FC = () => {

  const [currentData, setCurrentData] = useState<string>(countryList[0].country)
  const [data, updateData] = useState<chartDataType[]>(countryList[0].countryData)

  const setCurrentChartCountry = (country: CountryType) => {
    updateData(country.countryData)
    setCurrentData(country.country)
  }

  return (
    <main>
      <ChatWindow />
      <TitleTag title={`${currentData} Debt-Driven Solar Industry versus Profit Driven Solar Industry`} />
      <div style={regionsStyles.regionFlex}>
        <label>Choose Region - </label>
        {countryList.map(country => (
          <button onClick={() => setCurrentChartCountry(country)}>{country.country}</button>
        ))}
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