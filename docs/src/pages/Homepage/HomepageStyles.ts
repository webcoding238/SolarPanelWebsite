import SolarImage from '../../assets/SolarImage.png'

const homePageStyles = {
  main: {
    backgroundColor: 'lightskyblue',
    paddingBottom: '10px',
    width: '100%'
  },
  homepageTitle: {
    paddingLeft: '2em',
    marginTop: '30px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '64px',
    zIndex: '1000',
    textAlign: 'center' as const,
    overflowWrap: 'anywhere' as const
  },
  introGrid: {
    margin: '20px',
    display: 'grid',
    position: 'relative' as const,
    gridTemplateColumns: '1fr 1fr',
    gap: '3em',
    textAlign: 'center' as const,
    width: '100%'
  },
  mobileWidth: {
    margin: 'auto',
    paddingLeft: '2em',
    paddingRight: '2em'
  },
  mobileSummary: {
    marginTop: '2em',
    padding: '2em',
    color: 'white',
    backgroundImage: `url(${SolarImage})`,
    backgroundSize: 'cover',
    objectFit: 'contain' as const,
    backgroundRepeat: 'no-repeat'
  },
  mobileIcon: {
    marginTop: '2em',
    paddingTop: '1em',
    paddingBottom: '1em',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '100%'
  },
  gridItem1: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '1',
    marginTop: '2em',
    fontSize: '18px',
    width: '38vw',
    textAlign: 'left' as const
  },
  gridItem2: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '1',
    marginTop: '2em',
    marginRight: '2.5em'
  },
  backgroundImage: {
    margin: 'auto',
    objectFit: 'contain' as const,
    width: '100%',
    height: '100%',
    position: 'relative' as const,
    overflow: 'hidden'
  },
  barTitleMobile: {
    marginBottom: '1em',
    overflowWrap: 'anywhere' as const
  },
  titleGeneric: {
    marginTop: '3em',
    textAlign: 'center' as const,
    alignItems: 'center',
    fontSize: '28px',
    color: 'black'
  },
  homeGraph: {
    margin: 'auto',
    padding: '3em',
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'row' as  const,
    flexWrap: 'nowrap' as const,
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
    width: '70%'
  }
}

export default homePageStyles;