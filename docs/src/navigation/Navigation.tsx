import { useState, useEffect } from 'react'
import ProfileImage from '../assets/ProfileImage.svg'
import HeaderBackground from '../assets/HeaderBackground.png'

const navigationStyles = {
  header: {
    border: '2px solid black',
    backgroundImage: `url(${HeaderBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto'
  },
  headerScroll: {
    border: '2px solid black',
    backgroundImage: `url(${HeaderBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    width: '100%',
    overflowX: 'scroll' as const
  },
  titles: {
    backgroundColor: 'white',
    margin: '1em'
  },
  websiteTitle: {
    paddingLeft: '1em',
    fontColor: 'black',
    fontSize: '50px',
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '1',
    overflowWrap: 'anywhere' as const
  },
  websiteTitleMobile: {
    paddingLeft: '1em',
    fontColor: 'black',
    fontSize: '50px',
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
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '0.5em'
  },
  containerItemFlex: {
    marginTop: '1em',
    flexGrow: '1',
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '0.5em'
  },
  containerItemAndAlignment: {
    margin: '3em',
    flexGrow: '1',
    cursor: 'pointer'
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
};

interface navigationType { title: string; route: string; keyC: string }[]

const navigation: navigationType[] = [
  {title: 'Project Overview', route: 'Project', keyC: '1'},
  {title: 'Regional Statistics', route: 'Regions', keyC: '2'},
  {title: 'Historical Tracking', route: 'Tracking', keyC: '3'}
];

const NavigationButton: React.FC<navigationType> = (webpage) => {

  return (
    <div key={webpage.keyC}>
      <a style={navigationStyles.menuItem} href={`/${webpage.route}`}>{webpage.title}</a>
    </div>
  )
}

const Navigation: React.FC = () => {

  const [deviceSize, setDeviceSize] = useState<number>(0)
  
  useEffect(() => {
    const getWindow = () => {
      setDeviceSize(window.screen.width)
    }
    getWindow()

    window.addEventListener("resize", getWindow)

    return () => {
      window.removeEventListener("resize", getWindow)
    }
  }, [deviceSize])

  return (
    <>
      <header>
        {deviceSize > 1599 && (
          <>
            <div style={navigationStyles.websiteTitle}>Solar Panel Industry Statistical Analysis</div>
            <div style={navigationStyles.subTitlesFlex}>Department of Economics</div>
            <div style={navigationStyles.subTitlesFlex}>Reported by Project Data Enterprises</div>
            <div style={navigationStyles.subTitlesFlex}>Manager: George Payne</div>
            <div style={navigationStyles.navFlex}>
              <a href={'/'}>
                <img style={navigationStyles.containerItemFlex} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
              </a>
              <div style={navigationStyles.menuSpacingFlex}><a style={navigationStyles.navFlexTitlesFlex} href={'/Project'}>Project Overview</a></div>
              <div style={navigationStyles.menuSpacingFlex}><a style={navigationStyles.navFlexTitlesFlex} href={'/Regions'}>Regional Statistics</a></div>
              <div style={navigationStyles.menuSpacingFlex}><a style={navigationStyles.navFlexTitlesFlex} href={'/Tracking'}>Historical Tracking</a></div>
            </div>
          </>
        )}
        {deviceSize < 1600 && (
          <>
            <div style={navigationStyles.titleGrid}>
               <div>
                  <div style={navigationStyles.subTitlesMobile}>Department of Economics</div>
                  <div style={navigationStyles.subTitlesMobile}>Reported by Project Data Enterprises</div>
                  <div style={navigationStyles.subTitlesMobile}>Manager: George Payne</div>
                </div>
                <div style={navigationStyles.websiteTitleMobile}>Solar Panel Industry Statistical Analysis</div>
              </div>
            <div style={navigationStyles.headerScroll}>
              <nav>
                  <div style={navigationStyles.container}>
                    <a href={'/'}>
                      <img style={navigationStyles.containerItem} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
                    </a>
                    {navigation.map(webpage => (
                      <div key={webpage.keyC} style={navigationStyles.containerItemAndAlignment}>
                        <NavigationButton
                          keyC={webpage.keyC}
                          route={webpage.route}
                          title={webpage.title}
                          />
                      </div>
                    ))}
                  </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  )
}

export default Navigation;