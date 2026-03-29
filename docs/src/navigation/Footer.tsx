import { useState, useEffect } from 'react'

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
        position: 'relative' as const,
        gridTemplateColumns: '1fr 1fr',
    },
    leftFooter: {
        gridColumnStart: '1',
        gridColumnEnd: '1',
        gridRowStart: '1',
        gridRowEnd: '1',
        marginLeft: '2em',
        overflowWrap: 'anywhere' as const
    },
    rightFooter: {
        marginRight: '160px',
        padding: '2em',
        display: 'flex',
        flexDirection: 'column' as  const,
        justifyContent: 'space-evenly',
        textAlign: 'right' as const,
        overflowWrap: 'anywhere' as const
    },
    footerLinksMobile: {
        marginLeft: '2em',
        overflowWrap: 'anywhere' as const,
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column' as  const,
        justifyContent: 'space-evenly',
        textAlign: 'right' as const
    },
    footerBodyMobile: {
        marginLeft: '2em',
        overflowWrap: 'anywhere' as const
    },
    footerLinkColor: {
        color: 'white'
    }
}

const Footer: React.FC = () => {
    const [deviceSize, setDeviceSize] = useState<number>(0)
  
    useEffect(() => {
    const getWindow = () => {
        setDeviceSize(window.screen.width)
    }
    getWindow()

    window.addEventListener("resize", getWindow)

    return () => {
        window.removeEventListener("resize", getWindow)
    }
    }, [])

    return (
        <>
            {deviceSize > 449 ? (
                <div style={footerStyles.container}>
                    <div style={footerStyles.leftFooter}>
                        <p>Copyright 2026 - George Payne - All content is fictional.</p><br/>
                        <p>Some facts about solar energy are based on research. Feel free to do your own fact checking.</p>
                        <p>Built with React, Vite, Redux Toolkit, TypeScript, dummy data from RTK API calls, and Rechart.js</p><br />   
                        <p>Build technologies include:</p>    
                        <p>Docker, GitHub Actions, and Elastic Beanstalk for the Continuous Integration website hosting.</p> 
                        <p>Was hosting on a local server. Now using Vercel Github CI/CD.</p>
                    </div>
                    <div style={footerStyles.rightFooter}>
                        <div><a style={footerStyles.footerLinkColor} href={'/'}>Home</a></div>
                        <div><a style={footerStyles.footerLinkColor} href={'/Project'}>Project Overview</a></div>
                        <div><a style={footerStyles.footerLinkColor} href={'/Regions'}>Regional Statistics</a></div>
                        <div><a style={footerStyles.footerLinkColor} href={'/Tracking'}>Historical Tracking</a></div>
                    </div>
                </div>
            ) : (
                <div style={footerStyles.container}>
                    <div style={footerStyles.footerLinksMobile}>
                        <div><a style={footerStyles.footerLinkColor} href={'/'}>Home</a></div>
                        <div><a style={footerStyles.footerLinkColor} href={'/Project'}>Project Overview</a></div>
                        <div><a style={footerStyles.footerLinkColor} href={'/Regions'}>Regional Statistics</a></div>
                        <div><a style={footerStyles.footerLinkColor} href={'/Tracking'}>Historical Tracking</a></div>
                    </div>
                    <div style={footerStyles.footerBodyMobile}>
                        <p>Copyright 2026 - George Payne - All content is fictional.</p><br/>
                        <p>Some facts about solar energy are based on research. Feel free to do your own fact checking.</p>
                        <p>Built with React, Vite, Redux Toolkit, TypeScript, dummy data from RTK API calls, and Rechart.js</p><br />   
                        <p>Build technologies include:</p>    
                        <p>Docker, GitHub Actions, and Elastic Beanstalk for the Continuous Integration website hosting.</p> 
                        <p>Was hosting on a local server. Now using Vercel Github CI/CD.</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Footer