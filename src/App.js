
import './App.css';
import Navbars from './components/Nav/Navbars';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Team from './components/Team/Team';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
