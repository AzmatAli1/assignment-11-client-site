import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import FruitsDetails from './pages/Fruits/FruitsDetail/FruitsDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/fruitsDetails' element={<FruitsDetails></FruitsDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
