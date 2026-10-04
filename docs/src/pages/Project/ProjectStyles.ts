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

export default projectStyles;