const regionsStyles = {
  barTitle: {
    marginTop: '15px',
    textAlign: 'center' as const,
    alignItems: 'center',
    fontSize: '28px',
    overflowWrap: 'anywhere' as const
  },
  homeGraph: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    padding: '0.5em',
    position: 'relative' as const,
    flexDirection: 'row' as  const,
    flexWrap: 'nowrap' as const,
    backgroundColor: 'white',
    color: 'black',
    width: '70%'
  },
  regionFlex: {
    paddingTop: '0.5em',
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as  const,
    flexWrap: 'wrap' as const,
    justifyContent: 'space-evenly'
  },
  flexRegion: {
    position: 'relative' as const
  }
}

export default regionsStyles;