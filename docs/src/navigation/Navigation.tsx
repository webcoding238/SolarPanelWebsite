import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import ProfileImage from '../assets/ProfileImage.svg'
import { SubTitlesTag } from '../components/SharedTags'
import { setWebpage } from '../store/navigationSlice'
import './NavigationStyles.scss'
import '../components/themes/SharedStyles.scss'
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
      className={webpage.type === 'mobile' ? 
        (
          "menuItem cursorPointer"
        ) : (
          "menuSpacingFlex navFlexTitlesFlex cursorPointer"
        )}
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
          <div className={"header"}>
            <div className={"websiteTitle overflowWrapAnywhere"}>{Title}</div>
            {subTitles.map(subtitle => (
              <div key={subtitle.keyC}>
                <SubTitlesTag
                  keyC={subtitle.keyC}
                  title={subtitle.title}
                  />
              </div>
            ))}
            <div className={"navFlex"}>
              <div onClick={() => setCurrentWebpage('Homepage')} className={"containerItemAndAlignment"}>
                <img className={"containerItemFlex cursorPointer"} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
              </div>
              {navigation.map(webpage => (
                <div key={webpage.keyC} className={"containerItemAndAlignment"}>
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
            <div className={"titleGrid websiteTitle"}>{Title}</div>
            {subTitles.map(subtitle => (
              <div key={subtitle.keyC}>
                <SubTitlesTag
                  keyC={subtitle.keyC}
                  title={subtitle.title}
                  />
              </div>
            ))}
            <div className={"header scrollOverflow"}>
              <nav>
                <div className={"containerNavigation"}>
                  <div onClick={() => setCurrentWebpage('Homepage')} className={"containerItemAndAlignment"}>
                    <img className={"containerItemFlex cursorPointer"} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
                  </div>
                  {navigation.map(webpage => (
                    <div key={webpage.keyC} className={"containerItemAndAlignment"}>
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