const projectStyles = {
  main: {
    backgroundColor: 'lightskyblue',
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