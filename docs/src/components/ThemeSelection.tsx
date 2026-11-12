import { useSelector, useDispatch } from 'react-redux'
import LayoutLight from '../assets/svgrepo/LayoutLight.svg'
import LayoutDark from '../assets/svgrepo/LayoutDark.svg'
import { TitleTag } from './SharedTags'
import { 
    closeThemePopup,
    getThemePopup,
    getThemeContrast,
    toggleThemeContrast
} from '../store/navigationSlice'
import { ButtonSelection } from './themes/ThemeText'
import './themes/SharedStyles.scss'
import './ThemeSelectionStyles.scss'

const ThemeSelection: React.FC = () => {
  const closeThemeDispatch = useDispatch()
  const displayThemePopup = useSelector(getThemePopup)
  const toggleThemeContrastHandler = useDispatch()
  const isDarkTheme = useSelector(getThemeContrast)

  function togglePopover() {
      closeThemeDispatch(closeThemePopup(false))
  }

  function toggleTheme() {
    toggleThemeContrastHandler(toggleThemeContrast(!isDarkTheme))
  }

  return (
    <>
        {displayThemePopup &&
            <div className={`theme-popup popup-window ${isDarkTheme ? 'is-dark' : ''}`}>
                <TitleTag title={'Click to Set Theme to Light or Dark'} />
                {isDarkTheme ? (
                    <div onClick={toggleTheme} className={"cursor-pointer"}><img className={"cursorPointer"} src={LayoutLight} alt="Outline of light colored website layout shapes" width='300' height='300'/></div>
                ): (
                    <div onClick={toggleTheme} className={"cursor-pointer"}><img className={"cursorPointer"} src={LayoutDark} alt="Outline of dark colored website layout shapes" width='300' height='300'/></div>
                )}
                <div onClick={togglePopover} className={"utility-button cursor-pointer"}>{ButtonSelection}</div>
            </div>
        }
    </>
  )
}

export default ThemeSelection;