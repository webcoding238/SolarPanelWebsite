import { useRef } from 'react'
import ContactUs from '../assets/ContactUs.gif'

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

const ChatForm: React.FC = () => {
  return (
      <div style={chatStyles.popupWindow}>
          <h2>Get in touch!</h2>
          <button style={chatStyles.chatSendEmail} onClick={() => {window.location.href ='mailto:georgepyn1001@gmail.com'}}>Send an email</button>
      </div>
  )
}

const ChatWindow: React.FC = () => {
  const popoverRef = useRef(null)

  const togglePopover = () => {
    if (popoverRef.current) {
      popoverRef.current.matches(':popover-open') ? popoverRef.current.hidePopover() : popoverRef.current.showPopover();
    }
  }

  return (
    <>
        <div ref={popoverRef} popover='manual' style={chatStyles.popUpWindow}><ChatForm /></div>
        <div onClick={togglePopover} style={chatStyles.buttonWrapper} >
            <img src={ContactUs} alt="Contact Us Window Pop-up Button Gif of Typewriter Cartoon" width='100' height='60'/>
        </div>
    </>
  )
}

export default ChatWindow;