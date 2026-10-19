import navigationStyles from '../navigation/NavigationStyles'
import type { subTitleType } from '../types/navigation'

export const SubTitlesTag: React.FC<subTitleType> = (subtitle) => {
  return (
    <div key={subtitle.keyC} style={navigationStyles.subTitlesFlex}>{subtitle.title}</div>
  )
}