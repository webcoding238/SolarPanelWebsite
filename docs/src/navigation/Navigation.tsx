import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import ProfileImage from '../assets/ProfileImage.svg'
import HeaderBackground from '../assets/HeaderBackground.png'
import { setWebpage } from '../store/navigationSlice'
import sharedStyles from '../components/SharedStyles'
import navigationStyles from './NavigationStyles'

interface navigationType { title: string; route: string; keyC: string }[]

const navigation: navigationType[] = [
  {title: 'Project Overview', route: 'Project', keyC: '1'},
  {title: 'Regional Statistics', route: 'Regions', keyC: '2'},
  {title: 'Historical Tracking', route: 'Tracking', keyC: '3'}
];

const NavigationButton: React.FC<navigationType> = (webpage) => {
  const setWebpage = useDispatch();

  function setCurrentWebpage(webpage:string) {
    setWebpage(webpage)
  }

  return (
    <div key={webpage.keyC} style={{...navigationStyles.menuItem, ...sharedStyles.cursorPointer}} onClick={() => setCurrentWebpage(`${webpage.route}`)}>{webpage.title}</div>
  )
}

const Navigation: React.FC = () => {
  const ref = useRef(null);
  const setWebpageDispatch = useDispatch();
  const [deviceSize, setDeviceSize] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(entries => {
        setDeviceSize(entries[0].contentRect.width);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  function setCurrentWebpage(webpage:string) {
    setWebpageDispatch(setWebpage({type: webpage}))
  }

  return (
    <div ref={ref}>
      <header>
        {deviceSize > 949 ? (
          <>
            <div style={navigationStyles.websiteTitle}>Solar Panel Industry Statistical Analysis</div>
            <div style={navigationStyles.subTitlesFlex}>Department of Economics</div>
            <div style={navigationStyles.subTitlesFlex}>Reported by Project Data Enterprises</div>
            <div style={navigationStyles.subTitlesFlex}>Manager: George Payne</div>
            <div style={navigationStyles.navFlex}>
              <div onClick={() => setCurrentWebpage('Homepage')}>
                <img style={{...navigationStyles.containerItemFlex, ...sharedStyles.cursorPointer}} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
              </div>
              <div style={{...navigationStyles.menuSpacingFlex, ...navigationStyles.navFlexTitlesFlex, ...sharedStyles.cursorPointer}} onClick={() => setCurrentWebpage('Project')}>Project Overview</div>
              <div style={{...navigationStyles.menuSpacingFlex, ...navigationStyles.navFlexTitlesFlex, ...sharedStyles.cursorPointer}} onClick={() => setCurrentWebpage('Regions')}>Regional Statistics</div>
              <div style={{...navigationStyles.menuSpacingFlex, ...navigationStyles.navFlexTitlesFlex, ...sharedStyles.cursorPointer}} onClick={() => setCurrentWebpage('Tracking')}>Historical Tracking</div>
            </div>
          </>
        ) : (
          <>
            <div style={navigationStyles.titleGrid}>
               <div>
                  <div style={navigationStyles.subTitlesMobile}>Department of Economics</div>
                  <div style={navigationStyles.subTitlesMobile}>Reported by Project Data Enterprises</div>
                  <div style={navigationStyles.subTitlesMobile}>Manager: George Payne</div>
                </div>
                <div style={navigationStyles.websiteTitle}>Solar Panel Industry Statistical Analysis</div>
              </div>
            <div style={navigationStyles.headerScroll}>
              <nav>
                  <div style={navigationStyles.container}>
                    <a href={'/'}>
                      <img style={{...navigationStyles.containerItem, ...sharedStyles.cursorPointer}} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
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
    </div>
  )
}

export default Navigation;