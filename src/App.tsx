import { useState } from 'react'
import './styles/App.scss'
import LeftMenu from './components/left-menu'
import { pages } from './types'
import AboutMe from './components/content/about';
import Projects from './components/content/projects';

function App() {
  const [page, setPage] = useState<pages>("about_me");

  const setPageHandler = (page :pages) => {
    setPage(page);
  };

  const Render = () => {
    switch(page) {
      case 'about_me':

      return <AboutMe/>
      case 'projects':
         return <Projects/>
      default:
      return <div style={{position: 'absolute', left: '28vw', backgroundColor: 'red'}}>
        aAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAA
        <br></br>
        a
      </div>
    }
  }

  return (
    <>
      <Render/>
      <section>
        <LeftMenu selectButton={page} changePage={setPageHandler}/>
      </section>
    </>
  )
}

export default App
