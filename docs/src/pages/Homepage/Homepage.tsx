import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
//import SolarImage from '../../assets/SolarImage.png'
import Worldwide from '../../assets/Worldwide.svg'
import { getStatus, getError } from './usersSlice'
import RechartBarChart from './Rechart.tsx'
import './HompageStyles.scss'
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
    <main className={"main"}>
      <HeadingTag title={'Solar Power - Industrial Insights'} />
      <div className={mediaMobile > 1100 && deviceSize > 449 ? ("intro-grid") : ("mobile-width")}>
        {mediaMobile < 1100 && (<img
          className={"mobile-icon"}
          src={Worldwide}
          alt="Cartoon outline of the Earth"
          width='100' height='60'
          />)}
        <div className={mediaMobile > 1100 && deviceSize > 449 ? ("grid-item1-homepage") : ("mobile-summary")}>
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
        {mediaMobile > 1100 && deviceSize > 449 && (<div className={"grid-item2-homepage background-image-homepage"} />)}
      </div>
      <TitleTag title={'Ratio of Energy Sector Per Source - Global'} />
      <div className={"home-graph"}>
        {error !== 'No error' && <div><p>Error: {error}</p><br/><p>Status: {status}</p></div>}
        <RechartBarChart />
      </div>
    </main>
  )
}

export default Homepage