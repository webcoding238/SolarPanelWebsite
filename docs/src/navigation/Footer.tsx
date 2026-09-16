import { useState, useEffect, useRef } from 'react'

const footerStyles = {
    container: {
        backgroundColor: 'black',
        paddingTop: '10px',
        paddingBottom: '10px',
        textAlign: 'left' as const,
        color: 'white',
        width: '100%',
        bottom: '0px',
        display: 'grid',
        position: 'relative' as const
    },
    containerDesktop: {
        gridTemplateColumns: '1fr 1fr'
    },
    containerMobile: {
        gridTemplateColumns: '1fr 2fr'
    },
    leftFooter: {
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: '1',
        gridRowEnd: '1',
        marginLeft: '2em'
    },
    rightFooter: {
        marginRight: '160px',
        padding: '2em'
    },
    footerLinksMobile: {
        padding: '0.5em',
        display: 'flex'
    },
    columnStyle: {
        display: 'flex',
        flexDirection: 'column' as  const,
        justifyContent: 'space-evenly',
        textAlign: 'right' as const
    },
    footerBodyMobile: {
        marginLeft: '2em',
        width: '50vw'
    },
    wordWrapping: {
        verflowWrap: 'normal' as const,
        wordWrap: 'normal' as const,
        wordBreak: 'normal' as const
    }
}

const Boilerplate = () => {
    return (
        <>
            <p>Copyright 2026 - George Payne - All content is fictional.</p><br/>
            <p>Some facts about solar energy are based on research. Feel free to do your own fact checking.</p>
            <p>Built with React, Vite, Redux Toolkit, TypeScript, dummy data from RTK API calls, and Rechart.js</p><br />   
            <p>Build technologies include:</p>    
            <p>Docker, GitHub Actions, and Elastic Beanstalk for the Continuous Integration website hosting.</p> 
            <p>Was hosting on a local server. Now using Vercel Github CI/CD.</p>
        </>
    )
}

const FooterLinks = () => {
    return (
        <>
            <div><a href={'/'}>Home</a></div>
            <div><a href={'/Project'}>Project Overview</a></div>
            <div><a href={'/Regions'}>Regional Statistics</a></div>
            <div><a href={'/Tracking'}>Historical Tracking</a></div>
        </>
    )
}

const Footer: React.FC = () => {
    const ref = useRef(null);
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
                    <div style={{ ...footerStyles.rightFooter, ...footerStyles.columnStyle}}>
                        {<FooterLinks />}
                    </div>
                </div>
            ) : (
                <div style={{ ...footerStyles.container, ...footerStyles.containerMobile}}>
                    <div style={{ ...footerStyles.footerLinksMobile, ...footerStyles.columnStyle}}>
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