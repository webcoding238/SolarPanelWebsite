import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navigation from '../../navigation/Navigation'
import Footer from '../../navigation/Footer'
import ChatWindow from '../../navigation/ChatWindow'
import Trajectory from '../../assets/Trajectory.svg'
import SolarImage from '../../assets/SolarImage.png'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import {
  percentageData,
  formatPercent,
  itemSorter
 } from './Rechart'
import { data } from './trackingData'
import { 
  dummyDataThunk,
  getGeneratedData,
  getStatus,
  getError,
  bubbleSortAscendingReducer,
  bubbleSortDescendingReducer
} from './generatedDataSlice'

const trackingStyles = {
  titleSize: {
    fontSize: 'clamp(20px, 3vw, 36px)'
  },
  fontColorBlack: {
    color: 'black'
  },
  backgroundColorWhite: {
    backgroundColor: 'white'
  },
  positionRelative: {
    position: 'relative' as const
  },
  backgroundImage: {
    backgroundImage: `url(${SolarImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    opacity: '0.35',
    zIndex: '-1000',
    position: 'fixed' as const
  },
  titleGrid: {
    height: '50px',
    width: 'calc(38% + 7.5em)',
    margin: '15px',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '100%',
    gap: '5px',
    position: 'relative' as const
  },
  titleIcon: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '2'
  },
  titleIconMobile: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '2',
    padding: '1em',
    paddingBottom: '1em',
    borderRadius: '100%',
    width: '50px',
    height: '50px'
  },
  centerIcon: {
    margin: '-0.25em 0 0 -0.25em'
  },
  title: {
    padding: '10px',
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    overflowWrap: 'anywhere' as const
  },
  trackingSummary: {
    marginLeft: '5em',
    marginTop: '2em',
    padding: '5px',
    fontSize: '24px',
    width: '38%',
    zIndex: '1000'
  },
  barTitle: {
    margin: '2em',
    textAlign: 'center' as const,
    alignItems: 'center',
    overflowWrap: 'anywhere' as const
  },
  homeGraph: {
    margin: 'auto',
    padding: '3em',
    display: 'flex',
    position: 'relative' as const,
    flexDirection: 'row' as  const,
    flexWrap: 'nowrap' as const,
    justifyContent: 'center',
    width: '70%'
  },
  distances: {
    marginLeft: '1.5em',
    paddingRight: '1.5em',
    fontSize: 'clamp(12px, 1vw, 20px)',
    overflowWrap: 'anywhere' as const
  },
  distance: {
    display: 'inline',
    margin: '0 0.5em 0 0.5em'
  }
}

const Tracking: React.FC = ({ defaultIndex }: { defaultIndex?: number }) => {
  const ref = useRef();
  const popoverRef = useRef(null);
  const [deviceSize, setDeviceSize] = useState<number>(0);
  const generatedData = useSelector(getGeneratedData);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const dispatchDummyData = useDispatch();

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
        <div style={{...trackingStyles.positionRelative, ...trackingStyles.fontColorBlack, ...trackingStyles.backgroundColorWhite}}>
          <Navigation />
        </div>
        <div style={trackingStyles.titleGrid}>
          <div style={deviceSize > 949 ? trackingStyles.titleIcon : {...trackingStyles.titleIconMobile, ...trackingStyles.fontColorBlack, ...trackingStyles.backgroundColorWhite}}>
            <div style={trackingStyles.centerIcon}><img
              src={Trajectory}
              alt="Cartoon outline of schedule calendar"
              height='60'
              /></div>
          </div>
          <div style={{...trackingStyles.title, ...trackingStyles.titleSize}}>Chronology of Solar Panels</div>
        </div>
        <div style={{...trackingStyles.trackingSummary, ...trackingStyles.fontColorBlack, ...trackingStyles.backgroundColorWhite}}>
          In 1964 NASA, building upon previous inventions dating back to earlier than 1873,
          launched a satellite self-sufficient from solar power. In 1983 Prof. Martin Green of UNSW
          invented technology that is present in more than 90% of solar panels.
          <br/><br/>
          In the 2000's
          Japan's mainstream electronics corporations such as Mitsubishi and their
          peers manufactured a large portion of the solar panels used in residential early adapter
          regions such as Los Angeles. This marketshare tapered off around 2019, when
          manufacturing moved mostly to the USA and China. Now, the top 5 countries
          using residential solar power are United States of America, Japan, China, Australia and India.
          The U.S.A. produced more than 50% of their electricity in their
          grid from solar panels in 2023.
        </div>
        <ChatWindow />
        <div style={{...trackingStyles.barTitle, ...trackingStyles.titleSize}}>Solar Panels Manufacturing Locations Distances Greater Than 2,000 Miles of Clients</div>
        <div style={trackingStyles.distances}>
          <div onClick={togglePopover}>
            <div>Sort Results</div>
            <div ref={popoverRef} popover='manual'>
              <button onClick={() => sortAscending()}>Ascending</button>
              <button onClick={() => sortDescending()}>Descending</button>
            </div>
          </div>
          {status === 'succeeded' ? (generatedData.map((distance, index) => {
            return <div key={index + 33} style={{...trackingStyles.distance, ...trackingStyles.fontColorBlack}}>{distance}</div>
          })) : (<div style={{...trackingStyles.barTitle, ...trackingStyles.titleSize}}>Awaiting data for manufacturing distances...</div>)}
        </div>
        <div style={{...trackingStyles.barTitle, ...trackingStyles.titleSize}}>Residental Solar Panel Periods of Continued Growth</div>
        <div style={{...trackingStyles.homeGraph, ...trackingStyles.backgroundColorWhite}}>
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
        </div>
        <div style={{...trackingStyles.barTitle, ...trackingStyles.titleSize}}>
          Percentage of World Population By Age - Present Day - <br/>Who Will Consume More Than 65% of Their Electricity From Solar Power
        </div>
        <div style={trackingStyles.homeGraph}>
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
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Tracking