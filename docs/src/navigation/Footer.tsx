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
        overflow: 'wrap'
    },
    rightFooter: {
        marginRight: '160px',
        padding: '2em',
        display: 'flex',
        flexDirection: 'column' as  const,
        justifyContent: 'space-evenly',
        textAlign: 'right' as const,
        overflow: 'wrap'
    },
    footerLinkColor: {
        color: 'white'
    }
}

const Footer: React.FC = () => {
    return (
        <div style={footerStyles.container}>
            <div style={footerStyles.leftFooter}>
                <p>Copyright 2026 - George Payne - All content is fictional.</p><br/>
                <p>Some facts about solar energy are based on research. Feel free to do your own fact checking.</p>
                <p>Built with React, Vite, Redux Toolkit, TypeScript, dummy data from RTK API calls, and Rechart.js</p><br />   
                <p>Build technologies include:</p>    
                <p>Docker, GitHub Actions, and Elastic Beanstalk for the Continuous Integration website hosting.</p> 
                <p>Hosting on a local server.</p>
            </div>
            <div style={footerStyles.rightFooter}>
                <div><a style={footerStyles.footerLinkColor} href={'/'}>Home</a></div>
                <div><a style={footerStyles.footerLinkColor} href={'/Project'}>Project Overview</a></div>
                <div><a style={footerStyles.footerLinkColor} href={'/Regions'}>Regional Statistics</a></div>
                <div><a style={footerStyles.footerLinkColor} href={'/Tracking'}>Historical Tracking</a></div>
            </div>
    
        </div>
    )
}

export default Footer