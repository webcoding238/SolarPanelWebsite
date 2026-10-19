import { useRef } from 'react'
import ContactUs from '../assets/ContactUs.gif'
import chatStyles from './ChatStyles'

const ChatWindow: React.FC = () => {
  const popoverRef = useRef<HTMLDivElement>(null)

  function togglePopover() {
    if (popoverRef.current) {
      popoverRef.current.togglePopover();
    }
  }

  return (
    <>
      <div ref={popoverRef} style={chatStyles.popupWindow} popover='manual'>
          <h2>Get in touch!</h2>
          <button style={chatStyles.chatSendEmail} onClick={() => {window.location.href ='mailto:georgepyn1001@gmail.com'}}>Send an email</button>
      </div>
      <div onClick={togglePopover} style={chatStyles.buttonWrapper} >
          <img src={ContactUs} alt="Contact Us Window Pop-up Button Gif of Typewriter Cartoon" width='100' height='60'/>
      </div>
    </>
  )
}

export default ChatWindow;