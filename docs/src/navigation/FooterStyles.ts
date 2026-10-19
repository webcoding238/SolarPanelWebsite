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

export default footerStyles;