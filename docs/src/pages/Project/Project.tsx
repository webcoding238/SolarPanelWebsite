import ChatWindow from '../../navigation/ChatWindow'
import ProjectCard from '../../components/ProjectCard'
import { HeadingTag } from '../../components/SharedTags.tsx'
import projectStyles from './ProjectStyles.ts'
import { projectsHeader, projectsSummary } from './ProjectData.ts'
import { cardOne } from './CardData.ts'

const Project: React.FC = ({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: any;
}) => {

  return (
    <main style={projectStyles.main}>
      <ChatWindow />
      <HeadingTag title={projectsHeader} />
      <div style={projectStyles.projectsSummary}>{projectsSummary}</div>
      <div style={projectStyles.projects}>
        <ProjectCard
          chartType='pie'
          title='Estimates'
          summary={cardOne}
          isAnimationActive={isAnimationActive}
          defaultIndex={defaultIndex}
          />
        <ProjectCard
          chartType='line'
          title='Marketshare'
          summary={cardOne}
          isAnimationActive={isAnimationActive}
          defaultIndex={defaultIndex}
          />
        <ProjectCard
          chartType='scatter'
          title='Panel Ratios'
          summary={cardOne}
          isAnimationActive={isAnimationActive}
          defaultIndex={defaultIndex}
          />
        <ProjectCard
          chartType='radar'
          title='Expansion'
          summary={cardOne}
          isAnimationActive={isAnimationActive}
          defaultIndex={defaultIndex}
          />
        <ProjectCard
          chartType='composedChart'
          title='Solar Costs'
          summary={cardOne}
          isAnimationActive={isAnimationActive}
          defaultIndex={defaultIndex}
          />
      </div>
    </main>
  )
}

export default Project