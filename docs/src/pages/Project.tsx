import { useState, useEffect } from 'react'
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import ChatWindow from '../navigation/ChatWindow'
import ProjectTagIcon from '../assets/ProjectTagIcon.svg'
import ProjectCard from '../components/ProjectCard'

const projectStyles = {
  main: {
    backgroundColor: 'lightskyblue',
  },
  projectsTitle: {
    paddingLeft: '2em',
    marginTop: '30px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 'clamp(22px, 5vw, 50px)',
    zIndex: '1000',
    overflowWrap: 'anywhere' as const
  },
  projectsSummary: {
    marginLeft: '5em',
    marginTop: '2em',
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    fontSize: '24px',
    width: '38vw',
    zIndex: '1000'
  },
  projects: {
    display: 'flex',
    flexDirection: 'row' as  const,
    flexWrap: 'wrap' as const
  }
}

const cardOne = `Project G began in the western region in Aug. 2021. Studies were conducted
                  on the improvement in watts returned based on scalable battery grids.
                  The investment has had a savings from infrastructure costs
                  with a 15 year half-life at current ratios.`

const Project: React.FC = ({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: any /*TooltipIndex*/;
}) => {

  return (
    <>
      <Navigation />
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
      <Footer />
    </>
  )
}

export default Project