import navigationStyles from '../navigation/NavigationStyles'
import sharedStyles from './SharedStyles'
import type { subTitleType } from '../types/navigation'
import type { TagType } from '../types/tags'

export const SubTitlesTag: React.FC<subTitleType> = (subtitle) => {
  return (
    <div key={subtitle.keyC} style={navigationStyles.subTitlesFlex}>{subtitle.title}</div>
  )
}

export const TitleTag: React.FC<TagType> = (props) => {
  const { title } = props
  return (
    <div style={sharedStyles.barTitle}>{title}</div>
  )
}

export const HeadingTag: React.FC<TagType> = (props) => {
  const { title } = props
  return (
    <div style={sharedStyles.title}>{title}</div>
  )
}
