import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ChatWindow from '../../navigation/ChatWindow'
import SolarImage from '../../assets/SolarImage.png'
import Worldwide from '../../assets/Worldwide.svg'
import { getStatus, getError } from './usersSlice'
import RechartBarChart from './Rechart.tsx'
import homePageStyles from './HomepageStyles.ts'

const Homepage: React.FC = () => {
  const [mediaMobile, setMediaMobile] = useState<number>(1200);
  const [deviceSize, setDeviceSize] = useState<number>(0);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    const getWindow = () => {
      setMediaMobile(window.innerWidth)
      setDeviceSize(window.screen.width)
    }
    getWindow()

    window.addEventListener("resize", getWindow)

    return () => {
      window.removeEventListener("resize", getWindow)
    }
  }, [])

  return (
    <main style={homePageStyles.main}>
      <ChatWindow />
      <div style={homePageStyles.homepageTitle}>Solar Power - Industrial Insights</div>
      <div style={mediaMobile > 1100 && deviceSize > 449 ? homePageStyles.introGrid : homePageStyles.mobileWidth}>
        {mediaMobile < 1100 && (<img
          style={homePageStyles.mobileIcon}
          src={Worldwide}
          alt="Cartoon outline of the Earth"
          width='100' height='60'
          />)}
        <div style={mediaMobile > 1100 && deviceSize > 449 ? homePageStyles.gridItem1 : homePageStyles.mobileSummary}>
          The energy supply of society has evolved into a combination of
          what was most easily obtainable with also what sources were
          possible under sprawling political control.
          <br />
          <br />
          While there is an economy behind the energy industry, for instance the
          New York Mercantile Exchange, it balances itself between economic power
          and essential services. Depending on what location and current events
          throughout the world, you may be more towards either end of that spectrum.
          <br />
          <br />
          Energy in the economy is more similar to energy in nature than most believe it is.
          Often, when we hear oil, hydro-power, coal, wind power, nuclear power, and solar power called "energy" we get the feeling of a superficial definition that lacks details in commerce and lacks effort in explaining what is energy. However, the energy sector, albeit less human, is equally dynamic and elusive in regards to the changes in time, source, type, and multitude as the substance of energy in relation to energy versus matter, and also energy as emotions or feelings.
          <br />
          <br />
          {mediaMobile > 1100 && deviceSize > 449 && (<img
            src={Worldwide}
            alt="Cartoon outline of the Earth"
            width='100' height='60'
            />)}
        </div>
        {mediaMobile > 1100 && deviceSize > 449 && (<div style={homePageStyles.gridItem2}>
          <img src={SolarImage}
            style={homePageStyles.backgroundImage}
            alt="Photograph of a sloped rooftop with solar panels"
            />
          </div>)}
      </div>
      <div style={deviceSize > 449 ? homePageStyles.titleGeneric : {...homePageStyles.barTitleMobile, ...homePageStyles.titleGeneric}}>
        Ratio of Energy Sector Per Source - Global
      </div>
      <div style={homePageStyles.homeGraph}>
        {error !== 'No error' && <div><p>Error: {error}</p><br/><p>Status: {status}</p></div>}
        <RechartBarChart />
      </div>
    </main>
  )
}

export default Homepage