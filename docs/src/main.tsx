import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client"
import { store } from './store/store.ts'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import WrapperComponent from './components/WrapperComponent'

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WrapperComponent />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// const container = document.getElementById('root')