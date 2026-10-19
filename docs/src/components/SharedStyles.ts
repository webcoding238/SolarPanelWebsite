const sharedStyles = {
  fontColorBlack: {
    color: 'black'
  },
  backgroundColorWhite: {
    backgroundColor: 'white'
  },
  positionRelative: {
    position: 'relative' as const
  },
  positionAbsolute: {
    position: 'absolute' as const
  },
  displayBlock: {
    display: 'block' as const
  },
  cursorPointer: {
    cursor: 'pointer'
  },
  barTitle: {
    margin: '2em',
    textAlign: 'center' as const,
    fontSize: 'clamp(14px, 2vw, 36px)',
    alignItems: 'center',
    overflowWrap: 'anywhere' as const
  },
  title: {
    padding: '10px 10px 10px 1em',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 'clamp(20px, 3vw, 36px)',
    overflowWrap: 'anywhere' as const
  }
}

export default sharedStyles;