import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setWebpage } from '../store/navigationSlice'
import './FooterStyles.scss'
import '../components/themes/SharedStyles.scss'
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
                <div className={"container-footer container-desktop"}>
                    <div className={"left-footer word-wrapping"}>
                        {<Boilerplate />}
                    </div>
                    <div className={"right-footer column-style cursor-pointer"}>
                        {<FooterLinks />}
                    </div>
                </div>
            ) : (
                <div className={"container-footer container-mobile"}>
                    <div className={"footer-links-mobile column-style cursor-pointer"}>
                        {<FooterLinks />}
                    </div>
                    <div className={"footer-body-mobile word-wrapping"}>
                        {<Boilerplate />}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer