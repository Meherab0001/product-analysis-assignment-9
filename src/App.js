import {Routes,Route} from 'react-router-dom'
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Home from './Components/Home/Home'
import Reviwes from './Components/Reviews/Reviwes';
import Dashborad from './Components/Dashboard/Dashboard'
import Blogs from './Components/Blogs/Blogs'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviwes></Reviwes>}></Route>
        <Route path='/dashboard' element={<Dashborad></Dashborad>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route  path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
