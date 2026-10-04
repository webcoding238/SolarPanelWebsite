import HeaderBackground from '../assets/HeaderBackground.png'

const navigationStyles = {
  header: {
    border: '2px solid black',
    backgroundImage: `url(${HeaderBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: 'auto'
  },
  headerScroll: {
    border: '2px solid black',
    backgroundImage: `url(${HeaderBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    width: '100vw',
    overflowX: 'scroll' as const
  },
  websiteTitle: {
    paddingLeft: '1em',
    fontColor: 'black',
    minWidth: 0,
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '1',
    overflowWrap: 'anywhere' as const
  },
  subTitles: {
    fontColor: 'black',
    fontSize: '18px',
    overflowWrap: 'anywhere' as const
  },
  subTitlesMobile: {
    marginTop: '0.5em',
    paddingLeft: '1em',
    fontColor: 'black',
    opacity: '0.80',
    fontSize: '10px',
    overflowWrap: 'anywhere' as const
  },
  subTitlesFlex: {
    marginLeft: '3em',
    fontColor: 'black',
    fontSize: '18px'
  },
  titleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(autoFit, minmax(3fr, 1fr))',
    gridTemplateRows: '1fr',
    height: 'auto',
    width: '95%'
  },
  gridItemSubtitles: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '1',
    textAlign: 'right' as const,
    overflowWrap: 'anywhere' as const
  },
  container: {
    textAlign: 'center' as const,
    display: 'flex',
    height: '10em',
    width: '100%'
  },
  containerItem: {
    marginTop: '3em',
    marginLeft: '2em',
    flexGrow: '1',
    backgroundColor: 'white',
    borderRadius: '0.5em'
  },
  containerItemFlex: {
    marginTop: '1em',
    flexGrow: '1',
    backgroundColor: 'white',
    borderRadius: '0.5em'
  },
  containerItemAndAlignment: {
    margin: '3em',
    flexGrow: '1'
  },
  menuItem: {
    color: 'white',
    fontSize: '20px'
  },
  navFlex: {
    paddingTop: '0.5em',
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as  const,
    flexWrap: 'wrap' as const,
    justifyContent: 'space-evenly'
  },
  navFlexTitlesFlex: {
    color: 'black',
    position: 'relative' as const
  },
  menuSpacingFlex: {
    paddingTop: '2em',
  }
}

export default navigationStyles;