import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client"
import { store } from './store/store.ts'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import Homepage from './pages/Homepage.tsx'
import Project from './pages/Project.tsx'
import Regions from './pages/Regions.tsx'
import Tracking from './pages/Tracking.tsx'

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Regions" element={<Regions />} />
        <Route path="/Tracking" element={<Tracking />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// const container = document.getElementById('root')