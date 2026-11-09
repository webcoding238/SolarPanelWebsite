import ProjectCard from '../../components/ProjectCard'
import { HeadingTag } from '../../components/SharedTags.tsx'
import './ProjectStyles.scss'
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
    <main className={"main"}>
      <HeadingTag title={projectsHeader} />
      <div className={"projectsSummary"}>{projectsSummary}</div>
      <div className={"projects"}>
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