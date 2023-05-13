
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import Team from './pages/Team';
import Showcase from './pages/Showcase';
import './style/App.scss';

function App({  })  {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/team" element={<Team />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
