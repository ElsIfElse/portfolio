import './App.css'
import Satelite from './components/Satelite'

import BackgroundGrid from './sections/BackgroundGrid'
import ProfileCardSection from './sections/ProfileCardSection'
import ProjectsSection from './sections/ProjectsSection'
import StarHolder from './sections/StarHolder'
import TechSection from './sections/TechSection'


function App() {  

  return (
    <div className='flex flex-col items-center max-w-[600px]'>
      <ProfileCardSection/>
      <TechSection/>
      <ProjectsSection/>
      <BackgroundGrid/>
      <StarHolder/>
      <Satelite/>

    </div>
  )
}

export default App
