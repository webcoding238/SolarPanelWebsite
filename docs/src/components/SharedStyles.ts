const sharedStyles = {
  titleSize: {
    fontSize: 'clamp(20px, 3vw, 36px)'
  },
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
  }
}

export default sharedStyles;