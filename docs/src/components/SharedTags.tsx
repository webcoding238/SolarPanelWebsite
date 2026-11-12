import { useSelector } from 'react-redux'
import './themes/SharedStyles.scss'
import type { subTitleType } from '../types/navigation'
import type { TagType } from '../types/tags'
import { getThemeContrast } from '../store/navigationSlice'

export const SubTitlesTag: React.FC<subTitleType> = (subtitle) => {
  const isDarkTheme = useSelector(getThemeContrast)
  return (
    <div key={subtitle.keyC} className={`subTitlesFlex overflowWrapAnywhere ${isDarkTheme ? 'is-dark' : ''}`}>{subtitle.title}</div>
  )
}

export const TitleTag: React.FC<TagType> = (props) => {
  const { title } = props
  const isDarkTheme = useSelector(getThemeContrast)
  return (
    <div className={`barTitle ${isDarkTheme ? 'is-dark' : ''}`}>{title}</div>
  )
}

export const HeadingTag: React.FC<TagType> = (props) => {
  const { title } = props
  const isDarkTheme = useSelector(getThemeContrast)
  return (
    <div className={`title ${isDarkTheme ? 'is-dark' : ''}`}>{title}</div>
  )
}
