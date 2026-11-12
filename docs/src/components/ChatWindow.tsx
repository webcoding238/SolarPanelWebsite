import { useRef } from 'react'
import ContactUs from '../assets/ContactUs.gif'
import './ChatStyles.scss'
import '../components/themes/SharedStyles.scss'

const ChatWindow: React.FC = () => {
  const popoverRef = useRef<HTMLDivElement>(null)

  function togglePopover() {
    if (popoverRef.current) {
      popoverRef.current.togglePopover();
    }
  }

  return (
    <>
      <div ref={popoverRef} className={"popupWindow chatPopup"} popover='manual'>
          <h2>Get in touch!</h2>
          <button className={"utilityButton"} onClick={() => {window.location.href ='mailto:georgepyn1001@gmail.com'}}>Send an email</button>
      </div>
      <div onClick={togglePopover} className={"buttonWrapper cursorPointer"} >
          <img src={ContactUs} alt="Contact Us Window Pop-up Button Gif of Typewriter Cartoon" width='100' height='60'/>
      </div>
    </>
  )
}

export default ChatWindow;