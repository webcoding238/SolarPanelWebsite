import SolarImage from '../../assets/SolarImage.png'

const trackingStyles = {
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
    margin: '2em 0 0 1.5em',
    paddingRight: '1.5em',
    fontSize: 'clamp(12px, 1vw, 20px)',
    overflowWrap: 'anywhere' as const
  },
  distance: {
    display: 'inline',
    margin: '0 0.5em 0 0.5em'
  },
  dropdownContainer: {
    width: '10em'
  },
  sortButton: {
    padding: '10px',
    border: '2px solid black',
    borderRadius: '10%',
    color: 'black',
    backgroundColor: 'white',
    marginBottom: '2em',
    textAlign: 'center',
    width: '8em'
  },
  dropdown: {
    marginLeft: '2em',
    top: '109%',
    width: '8.5em'
  }
}

export default trackingStyles