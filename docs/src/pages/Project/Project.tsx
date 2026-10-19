import ChatWindow from '../../navigation/ChatWindow'
import ProjectCard from '../../components/ProjectCard'
import projectStyles from './ProjectStyles.ts'
import { cardOne } from '../Project/cardData.ts'

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
      <div style={projectStyles.projectsTitle}>Solar Industry Projects - Highlighted Insights</div>
      <div style={projectStyles.projectsSummary}>
        Key projects in the solar industry are aimed at improving 
        efficiency and speed to market. There are also statistical
        analysis studies to reference for key decision making.
        Various industry contract leaders are in the projection
        phase of investigating the most effective organization
        options for managerial groups before then applying and 
        seeking more effective statistics through fast,
        plotted webs of human capital.
      </div>
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