import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ProjectPage from './pages/ProjectPage'

function App() {  

  return (
      <Routes>
          <Route path="/portfolio/" element={<MainPage/>} />
          <Route path="/portfolio/project/:id" element={<ProjectPage/>} />
      </Routes>
  )
}

export default App
