import { useSelector } from 'react-redux'
import Homepage from '../pages/Homepage/Homepage.tsx'
import Project from '../pages/Project/Project.tsx'
import Regions from '../pages/Regions/Regions.tsx'
import Tracking from '../pages/Tracking/Tracking.tsx'
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import { getWebpage } from '../store/navigationSlice'

const WrapperComponent: React.FC = () => {
    const currentPage = useSelector(getWebpage)
    return (
        <>
            <Navigation />
                {currentPage === 'Homepage' && <Homepage />}
                {currentPage === 'Project' && <Project />}
                {currentPage === 'Regions' && <Regions />}
                {currentPage === 'Tracking' && <Tracking />}
            <Footer />
        </>
    )
}

export default WrapperComponent;