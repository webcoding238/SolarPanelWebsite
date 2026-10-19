import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setWebpage } from '../store/navigationSlice'
import footerStyles from './FooterStyles'
import sharedStyles from '../components/SharedStyles'
import type { navigationType } from '../types/navigation'
import { 
    navigation,
    BoilerPlatePh1,
    BoilerPlatePh2,
    BoilerPlatePh3,
    BoilerPlatePh4,
    BoilerPlatePh5,
    BoilerPlatePh6
 } from './NavigationData'

const Boilerplate = () => {
    return (
        <>
            <p>{BoilerPlatePh1}</p><br />
            <p>{BoilerPlatePh2}</p>
            <p>{BoilerPlatePh3}</p><br />   
            <p>{BoilerPlatePh4}</p>    
            <p>{BoilerPlatePh5}</p> 
            <p>{BoilerPlatePh6}</p>
        </>
    )
}

const FooterLinks = () => {
    const setWebpageDispatch = useDispatch();

    function setCurrentWebpage(webpage: navigationType) {
        setWebpageDispatch(setWebpage(webpage.route))
    }

    return (
        <>
            <div onClick={() => setWebpageDispatch(setWebpage('Homepage'))}>{'Homepage'}</div>
            {navigation.map(webpage => (
                <div key={webpage.keyC} onClick={() => setCurrentWebpage(webpage)}>{webpage.title}
                </div>
            ))}
        </>
    )
}

const Footer: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [deviceSize, setDeviceSize] = useState<number>(0);
  
    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(entries => {
            setDeviceSize(entries[0].contentRect.width);
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            {deviceSize > 676 ? (
                <div style={{...footerStyles.container, ...footerStyles.containerDesktop}}>
                    <div style={{ ...footerStyles.leftFooter, ...footerStyles.wordWrapping}}>
                        {<Boilerplate />}
                    </div>
                    <div style={{ ...footerStyles.rightFooter, ...footerStyles.columnStyle, ...sharedStyles.cursorPointer}}>
                        {<FooterLinks />}
                    </div>
                </div>
            ) : (
                <div style={{ ...footerStyles.container, ...footerStyles.containerMobile}}>
                    <div style={{ ...footerStyles.footerLinksMobile, ...footerStyles.columnStyle, ...sharedStyles.cursorPointer}}>
                        {<FooterLinks />}
                    </div>
                    <div style={{ ...footerStyles.footerBodyMobile, ...footerStyles.wordWrapping}}>
                        {<Boilerplate />}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer