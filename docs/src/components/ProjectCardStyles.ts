const projectStyles = {
  projectCardWrapper: {
    height: '30em',
    width: '20em',
    borderRadius: '20px',
    backgroundColor: 'white',
    color: 'black',
    padding: '15px',
    boxShadow: '25px 35px',
    position: 'relative' as const,
    border: '2px solid grey',
    margin: '5em',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '15% 15% 70%',
    gap: '5px'
  },
  cardTitleIcon: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '2'
  },
  cardTitle: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    textAlign: 'center' as const
  },
  cardSummary: {
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '2',
    fontSize: '14px',
    overflowWrap: 'anywhere' as const
  },
  cardData: {
    paddingTop: '2em',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    gridRowStart: '3',
    gridRowEnd: '3',
  },
  chartStyles: {
    width: '100%',
    height: '100%',
    maxWidth: '500px',
    maxHeight: '80vh',
    aspectRatio: 1,
    margin: 'auto',
    position: 'relative' as const
  },
  scatterSize: {
    marginTop: '3em',
    width: '80%',
    heigh: '80%'
  }
}

export default projectStyles;