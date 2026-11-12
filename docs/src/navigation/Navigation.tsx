import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProfileImage from '../assets/ProfileImage.svg'
import LayoutLightThumbnail from '../assets/svgrepo/LayoutLightThumbnail.svg'
import LayoutDarkThumbnail from '../assets/svgrepo/LayoutDarkThumbnail.svg'
import { SubTitlesTag } from '../components/SharedTags'
import { setWebpage } from '../store/navigationSlice'
import './NavigationStyles.scss'
import '../components/themes/SharedStyles.scss'
import {
  getThemePopup,
  getThemeContrast,
  toggleThemeContrast
} from '../store/navigationSlice'
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
  const toggleThemeContrastHandler = useDispatch();
  const isDarkTheme = useSelector(getThemeContrast);
  const displayThemePopup = useSelector(getThemePopup);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(entries => {
        setDeviceSize(entries[0].contentRect.width);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  function setCurrentWebpage(webpage:string) {
    setWebpageDispatch(setWebpage(webpage));
  }

  function toggleTheme() {
    toggleThemeContrastHandler(toggleThemeContrast(!isDarkTheme));
  }

  return (
    <div ref={ref}>
      <header>
        {deviceSize > 949 ? (
          <div className={"header"}>
            <div className={`title-grid theme-background theme-font-color ${isDarkTheme ? 'is-dark' : ''}`}>
              <div className={"website-title overflow-wrap-anywhere title-text"}>{Title}</div>
              <div className={"title-theme-icon"}>
                {isDarkTheme ? (
                !displayThemePopup && <img
                  className={"cursor-pointer"}
                  onClick={toggleTheme}
                  src={LayoutLightThumbnail}
                  alt="Outline of light colored website layout shapes thumbnail" width='60' height='60'
                  />
                ) : (
                  !displayThemePopup && <img
                    className={"cursor-pointer"}
                    onClick={toggleTheme}
                    src={LayoutDarkThumbnail}
                    alt="Outline of light colored website layout shapes thumbnail" width='60' height='60'
                    />)}
              </div>
            </div>
            <div className={`theme-background ${isDarkTheme ? 'is-dark' : ''}`}>
              {subTitles.map(subtitle => (
                <div key={subtitle.keyC} className={"cursor-pointer"}>
                  <SubTitlesTag
                    keyC={subtitle.keyC}
                    title={subtitle.title}
                    />
                </div>
              ))}
            </div>
            <div className={"nav-flex"}>
              <div onClick={() => setCurrentWebpage('Homepage')} className={"container-item-and-alignment"}>
                <img className={"container-item-flex cursor-pointer"} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
              </div>
              {navigation.map(webpage => (
                <div key={webpage.keyC} className={"cursor-pointer container-item-and-alignment"}>
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
            <div className={`title-grid-mobile theme-background theme-font-color ${isDarkTheme ? 'is-dark' : ''}`}>
              <div className={"title-theme-icon-mobile"}>
                {isDarkTheme ? (
                !displayThemePopup && <img
                  className={"cursor-pointer"}
                  onClick={toggleTheme}
                  src={LayoutLightThumbnail}
                  alt="Outline of light colored website layout shapes thumbnail" width='60' height='60'
                  />
                ) : (
                  !displayThemePopup && <img
                    className={"cursor-pointer"}
                    onClick={toggleTheme}
                    src={LayoutDarkThumbnail}
                    alt="Outline of light colored website layout shapes thumbnail" width='60' height='60'
                    />)}
              </div>
              <div className={"overflow-wrap-anywhere title-text-mobile"}>{Title}</div>
            </div>
            <div className={`theme-background ${isDarkTheme ? 'is-dark' : ''}`}>
              {subTitles.map(subtitle => (
                <div key={subtitle.keyC}>
                  <SubTitlesTag
                    keyC={subtitle.keyC}
                    title={subtitle.title}
                    />
                </div>
              ))}
            </div>
            <div className={"header scroll-overflow"}>
              <nav>
                <div className={"container-navigation"}>
                  <div onClick={() => setCurrentWebpage('Homepage')} className={"container-item-and-alignment"}>
                    <img className={"container-item-flex cursor-pointer"} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
                  </div>
                  {navigation.map(webpage => (
                    <div key={webpage.keyC} className={"cursor-pointer container-item-and-alignment"}>
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