import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navigation from '../../navigation/Navigation'
import Footer from '../../navigation/Footer'
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

const TitleTag: React.FC = (props?: string) => {
  const { title } = props
  return (
    <div style={{...trackingStyles.barTitle, ...trackingStyles.titleSize}}>{title}</div>
  )
}

const HeadingTag: React.FC = (props?: string) => {
  const { title } = props
  return (
    <div style={{...trackingStyles.title, ...trackingStyles.titleSize}}>{title}</div>
  )
}

const Tracking: React.FC = ({ defaultIndex }: { defaultIndex?: number }) => {
  const ref = useRef();
  const popoverRef = useRef(null);
  const [deviceSize, setDeviceSize] = useState<number>(0);
  const dispatchDummyData = useDispatch();
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

  function togglePopover() {
    if (popoverRef.current) {
      popoverRef.current.togglePopover();
    }
  }

  function sortAscending() {
    dispatchDummyData(bubbleSortAscendingReducer())
  }

  function sortDescending() {
    dispatchDummyData(bubbleSortDescendingReducer())
  }

  return (
    <div ref={ref}>
      <main style={trackingStyles.main}>
        <img src={SolarImage}
          style={trackingStyles.backgroundImage}
          alt="Photograph of a sloped rooftop with solar panels"
          />
        <div style={{...trackingStyles.positionRelative, ...trackingStyles.fontColorBlack, ...trackingStyles.backgroundColorWhite}}><Navigation /></div>
        <div style={trackingStyles.titleGrid}>
          <div style={deviceSize > 949 ? trackingStyles.titleIcon : {...trackingStyles.titleIconMobile, ...trackingStyles.fontColorBlack, ...trackingStyles.backgroundColorWhite}}>
            <div style={trackingStyles.centerIcon}><img
              src={Trajectory}
              alt="Cartoon outline of schedule calendar"
              height='60'
              /></div>
          </div>
          <HeadingTag title={'Chronology of Solar Panels'} />
        </div>
        <div style={{...trackingStyles.trackingSummary, ...trackingStyles.fontColorBlack, ...trackingStyles.backgroundColorWhite}}>{paragraphOne}<br/><br/>{paragraphTwo}</div>
        <ChatWindow />
        <TitleTag title={'Solar Panels Manufacturing Locations Distances Greater Than 2,000 Miles of Clients'} />
        <div style={trackingStyles.distances}>
          <div onMouseOver={togglePopover} style={{...trackingStyles.positionRelative, ...trackingStyles.dropdownContainer}}>
            <div style={{ ...trackingStyles.distance, ...trackingStyles.sortButton, ...trackingStyles.displayBlock}}>Sort Results</div>
            <div onMouseOver={togglePopover} style={{ ...trackingStyles.dropdown, ...trackingStyles.positionAbsolute}} ref={popoverRef} popover='manual'>
              <button style={trackingStyles.displayBlock} onClick={() => sortAscending()}>Ascending</button>
              <button style={trackingStyles.displayBlock} onClick={() => sortDescending()}>Descending</button>
            </div>
          </div>
          {status === 'succeeded' ? (generatedData.map((distance, index) => {
            return <div key={index + 33} style={{...trackingStyles.distance, ...trackingStyles.fontColorBlack}}>{distance}</div>
          })) : (<div><TitleTag title={'Awaiting data for manufacturing distances...'} />{error}</div>)}
        </div>
        <TitleTag title={'Residental Solar Panel Periods of Continued Growth'} />
        <div style={{...trackingStyles.homeGraph, ...trackingStyles.backgroundColorWhite}}><GrowthChart /></div>
        <TitleTag title={'Percentage of World Population By Age - Present Day - '}/>
        <TitleTag title={'Who Will Consume More Than 65% of Their Electricity From Solar Power'}/>
        <div style={trackingStyles.homeGraph}><AgeChart /></div>
      </main>
      <Footer />
    </div>
  )
}

export default Tracking