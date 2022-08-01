import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'
import NavBar from './components/NavigationBar';
import { useState } from 'react';
import Home from './components/pages/Home';
import Certificates from './components/pages/Certificates';
import Projects from './components/pages/Projects';


function App() {

  const [page, setPage] = useState('HOME');

  function setPageHandler(page) {
    setPage(page)
  }

  function showPage() {
    // eslint-disable-next-line default-case
    switch (page) {
      case 'HOME': {
        return <Home/>
      }

      case 'CERTIFICATES': {
        return <Certificates/>
      }

      case 'PROJECTS': {
        return <Projects/>
      }
    }
  }

  return (
    <div className="App">
      <NavBar page={page} setPage={setPageHandler}/>
      <div className='container'>
        {showPage()}
      </div>
    </div>
  );
}

export default App;
