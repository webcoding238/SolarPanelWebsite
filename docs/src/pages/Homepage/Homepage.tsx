import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ChatWindow from '../../navigation/ChatWindow'
import SolarImage from '../../assets/SolarImage.png'
import Worldwide from '../../assets/Worldwide.svg'
import { getStatus, getError } from './usersSlice'
import RechartBarChart from './Rechart.tsx'
import homePageStyles from './HomepageStyles.ts'
import { HeadingTag, TitleTag } from '../../components/SharedTags.tsx'
import {
  Paragraph1,
  Paragraph2,
  Paragraph3
} from './HomepageData.ts'

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
      <HeadingTag title={'Solar Power - Industrial Insights'} />
      <div style={mediaMobile > 1100 && deviceSize > 449 ? homePageStyles.introGrid : homePageStyles.mobileWidth}>
        {mediaMobile < 1100 && (<img
          style={homePageStyles.mobileIcon}
          src={Worldwide}
          alt="Cartoon outline of the Earth"
          width='100' height='60'
          />)}
        <div style={mediaMobile > 1100 && deviceSize > 449 ? homePageStyles.gridItem1 : homePageStyles.mobileSummary}>
          {Paragraph1}
          <br />
          <br />
          {Paragraph2}
          <br />
          <br />
          {Paragraph3}
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
      <TitleTag title={'Ratio of Energy Sector Per Source - Global'} />
      <div style={homePageStyles.homeGraph}>
        {error !== 'No error' && <div><p>Error: {error}</p><br/><p>Status: {status}</p></div>}
        <RechartBarChart />
      </div>
    </main>
  )
}

export default Homepage