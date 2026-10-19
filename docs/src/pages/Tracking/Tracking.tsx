import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ChatWindow from '../../navigation/ChatWindow'
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
import trackingStyles from './TrackingStyles'
import sharedStyles from '../../components/SharedStyles'
import type { AppDispatch } from '../../store/store';

interface TagType {title: string}

const TitleTag: React.FC<TagType> = (props) => {
  const { title } = props
  return (
    <div style={{...trackingStyles.barTitle, ...sharedStyles.titleSize}}>{title}</div>
  )
}

const HeadingTag: React.FC<TagType> = (props) => {
  const { title } = props
  return (
    <div style={{...trackingStyles.title, ...sharedStyles.titleSize}}>{title}</div>
  )
}

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
          style={deviceSize > 949 ? ({...trackingStyles.backgroundImage, ...trackingStyles.backgroundPlacement}) : ({...trackingStyles.backgroundImage, ...trackingStyles.backgroundPlacementMobile})}
          alt="Photograph of a sloped rooftop with solar panels"
          />
        <div style={trackingStyles.titleGrid}>
          <div style={deviceSize > 949 ? trackingStyles.titleIcon : {...trackingStyles.titleIconMobile, ...sharedStyles.fontColorBlack, ...sharedStyles.backgroundColorWhite}}>
            <div style={trackingStyles.centerIcon}><img
              src={Trajectory}
              alt="Cartoon outline of schedule calendar"
              height='60'
              /></div>
          </div>
          <HeadingTag title={'Chronology of Solar Panels'} />
        </div>
        <div style={{...trackingStyles.trackingSummary, ...sharedStyles.fontColorBlack, ...sharedStyles.backgroundColorWhite}}>{paragraphOne}<br/><br/>{paragraphTwo}</div>
        <ChatWindow />
        <TitleTag title={'Solar Panels Manufacturing Locations Distances Greater Than 2,000 Miles of Clients'} />
        <div style={trackingStyles.distances}>
          <button onClick={() => sortAscending()}>Sort Ascending</button>
          <button onClick={() => sortDescending()}>Sort Descending</button>
          {status === 'succeeded' ? (generatedData.map((distance, index) => {
            return <div key={index + 33} style={{...trackingStyles.distance, ...sharedStyles.fontColorBlack}}>{distance}</div>
          })) : (<div><TitleTag title={'Awaiting data for manufacturing distances...'} />{error}</div>)}
        </div>
        <TitleTag title={'Residental Solar Panel Periods of Continued Growth'} />
        <div style={{...trackingStyles.homeGraph, ...sharedStyles.backgroundColorWhite}}><GrowthChart /></div>
        <TitleTag title={'Percentage of World Population By Age - Present Day - '}/>
        <TitleTag title={'Who Will Consume More Than 65% of Their Electricity From Solar Power'}/>
        <div style={trackingStyles.homeGraph}><AgeChart /></div>
      </main>
    </div>
  )
}

export default Tracking