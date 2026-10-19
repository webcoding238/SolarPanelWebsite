import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import ProfileImage from '../assets/ProfileImage.svg'
import { SubTitlesTag } from '../components/SharedTags'
import { setWebpage } from '../store/navigationSlice'
import sharedStyles from '../components/SharedStyles'
import navigationStyles from './NavigationStyles'
import type { navigationType } from '../types/navigation'
import { 
  navigation,
  Title,
  subTitles
} from './NavigationData'

const NavigationButton: React.FC<navigationType> = (webpage) => {
  const setWebpageDispatch = useDispatch();

  function setCurrentWebpage(webpage: navigationType) {
    setWebpageDispatch(setWebpage(webpage.route))
  }

  return (
    <div key={webpage.keyC}
      onClick={() => setCurrentWebpage(webpage)}
      style={webpage.type === 'mobile' ? 
        ({
          ...navigationStyles.menuItem,
          ...sharedStyles.cursorPointer
        }) : ({
          ...navigationStyles.menuSpacingFlex,
          ...navigationStyles.navFlexTitlesFlex,
          ...sharedStyles.cursorPointer
        })}
    >{webpage.title}</div>
  )
}

const Navigation: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
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
    setWebpageDispatch(setWebpage(webpage))
  }

  return (
    <div ref={ref}>
      <header>
        {deviceSize > 949 ? (
          <div style={navigationStyles.header}>
            <div style={navigationStyles.websiteTitle}>{Title}</div>
            {subTitles.map(subtitle => (
              <div key={subtitle.keyC}>
                <SubTitlesTag
                  keyC={subtitle.keyC}
                  title={subtitle.title}
                  />
              </div>
            ))}
            <div style={navigationStyles.navFlex}>
              <div onClick={() => setCurrentWebpage('Homepage')} style={navigationStyles.containerItemAndAlignment}>
                <img style={{...navigationStyles.containerItemFlex, ...sharedStyles.cursorPointer}} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
              </div>
              {navigation.map(webpage => (
                <div key={webpage.keyC} style={navigationStyles.containerItemAndAlignment}>
                  <NavigationButton
                    keyC={webpage.keyC}
                    route={webpage.route}
                    title={webpage.title}
                    type={'desktop'}
                    />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div style={{ ...navigationStyles.titleGrid, ...navigationStyles.websiteTitle}}>{Title}</div>
            {subTitles.map(subtitle => (
              <div key={subtitle.keyC}>
                <SubTitlesTag
                  keyC={subtitle.keyC}
                  title={subtitle.title}
                  />
              </div>
            ))}
            <div style={navigationStyles.headerScroll}>
              <nav>
                <div style={navigationStyles.container}>
                  <div onClick={() => setCurrentWebpage('Homepage')} style={navigationStyles.containerItemAndAlignment}>
                    <img style={{...navigationStyles.containerItemFlex, ...sharedStyles.cursorPointer}} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
                  </div>
                  {navigation.map(webpage => (
                    <div key={webpage.keyC} style={navigationStyles.containerItemAndAlignment}>
                      <NavigationButton
                        keyC={webpage.keyC}
                        route={webpage.route}
                        title={webpage.title}
                        type={'mobile'}
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