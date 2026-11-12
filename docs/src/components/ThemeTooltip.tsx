import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ToolTipOne } from './themes/ThemeText';
import { getThemePopup } from '../store/navigationSlice';
import './ThemeTooltipStyles.scss';
import '../components/themes/SharedStyles.scss';

const ThemeTooltip: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [showToolTip, setShowToolTop] = useState<boolean>(true);
    const displayThemePopup = useSelector(getThemePopup);
    const [deviceSize, setDeviceSize] = useState<number>(0);

      useEffect(() => {
        !displayThemePopup && setTimeout(() => {
          setShowToolTop(false);
        }, 5000);
      }, [displayThemePopup]);
    
      useEffect(() => {
        if (!ref.current) return;
    
        const observer = new ResizeObserver(entries => {
            setDeviceSize(entries[0].contentRect.width);
        });
    
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, []);

      console.log('deviceSize: ', deviceSize)

  return (
    <div ref={ref}>
      <div className={deviceSize > 949 ? "button-wrapper-tooltip-desktop cursor-pointer" : "button-wrapper-tooltip-mobile cursor-pointer"} >
          {!displayThemePopup && showToolTip && (<div className={deviceSize > 949 ? "tooltip-bubble-desktop" : "tooltip-bubble-mobile"}>{ToolTipOne}</div>)}
      </div>
    </div>
  )
}

export default ThemeTooltip;