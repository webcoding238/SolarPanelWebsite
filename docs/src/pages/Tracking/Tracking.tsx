import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GrowthChart from './GrowthChart'
import AgeChart from './AgeChart'
import SolarImage from '../../assets/SolarImage.png'
import Trajectory from '../../assets/Trajectory.svg'
import { paragraphOne, paragraphTwo } from './trackingData'
import { 
  dummyDataThunk,
  getGeneratedData,
  getStatus,
  getError,
  bubbleSortAscendingReducer,
  bubbleSortDescendingReducer
} from './generatedDataSlice'
import './TrackingStyles.scss'
import type { AppDispatch } from '../../store/store'
import { TitleTag } from '../../components/SharedTags'

const Tracking: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [deviceSize, setDeviceSize] = useState<number>(0);
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatchDummyData = useAppDispatch();
  const generatedData = useSelector(getGeneratedData);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    dispatchDummyData(dummyDataThunk())
  }, [dispatchDummyData])
  
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(entries => {
        setDeviceSize(entries[0].contentRect.width);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function sortAscending() {
    dispatchDummyData(bubbleSortAscendingReducer())
  }

  function sortDescending() {
    dispatchDummyData(bubbleSortDescendingReducer())
  }

  return (
    <div ref={ref}>
      <main>
        <img src={SolarImage}
          className={deviceSize > 949 ? ("background-image background-placement") : ("background-image background-placement-mobile")}
          alt="Photograph of a sloped rooftop with solar panels"
          />
        <div className={"title-grid-tracking"}>
          <div className={deviceSize > 949 ? ("title-icon") : ("title-icon-mobile")}>
            <div className={"center-icon"}><img
              src={Trajectory}
              alt="Cartoon outline of schedule calendar"
              height='60'
              /></div>
          </div>
          <div className={"title-tracking"}>
            <TitleTag title={'Chronology of Solar Panels'} />
          </div>
        </div>
        <div className={"tracking-summary"}>{paragraphOne}<br/><br/>{paragraphTwo}</div>
        <TitleTag title={'Solar Panels Manufacturing Locations Distances Greater Than 2,000 Miles of Clients'} />
        <div className={"distances overflow-wrap-anywhere"}>
          <button onClick={() => sortAscending()}>Sort Ascending</button>
          <button onClick={() => sortDescending()}>Sort Descending</button>
          {status === 'succeeded' ? (generatedData.map((distance, index) => {
            return <div key={index + 33} className={"distance"}>{distance}</div>
          })) : (<div><TitleTag title={'Awaiting data for manufacturing distances...'} />{error}</div>)}
        </div>
        <TitleTag title={'Residental Solar Panel Periods of Continued Growth'} />
        <div className={"home-graph"}><GrowthChart /></div>
        <TitleTag title={'Percentage of World Population By Age - Present Day - '}/>
        <TitleTag title={'Who Will Consume More Than 65% of Their Electricity From Solar Power'}/>
        <div className={"home-graph"}><AgeChart /></div>
      </main>
    </div>
  )
}

export default Tracking