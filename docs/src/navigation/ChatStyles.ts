const chatStyles = {
  buttonWrapper: {
    position: 'fixed' as const,
    right: '40px',
    bottom: '40px',
    background: 'white',
    border: '2px solid black',
    cursor: 'pointer',
    zIndex: '100'
  },
  popupWindow: {
    textAlign: 'center' as const,
    border: '2px solid grey',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '2em',
    padding: '3em 1em 1em 1em',
    boxShadow: '12px 21px black',
    height: '200px',
    width: '265px',
    zIndex: '999',
    position: 'fixed' as const,
    right: '40px',
    bottom: '200px'
  },
  chatSendEmail: {
    border: '3px solid blue',
    backgroundColor: 'lightBlue',
    borderRadius: '1em',
    width: '100%'
  }
};

export default chatStyles;