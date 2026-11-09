import './SharedStyles.scss'
import type { subTitleType } from '../types/navigation'
import type { TagType } from '../types/tags'

export const SubTitlesTag: React.FC<subTitleType> = (subtitle) => {
  return (
    <div key={subtitle.keyC} className={"subTitlesFlex overflowWrapAnywhere"}>{subtitle.title}</div>
  )
}

export const TitleTag: React.FC<TagType> = (props) => {
  const { title } = props
  return (
    <div className={"barTitle"}>{title}</div>
  )
}

export const HeadingTag: React.FC<TagType> = (props) => {
  const { title } = props
  return (
    <div className={"title"}>{title}</div>
  )
}
