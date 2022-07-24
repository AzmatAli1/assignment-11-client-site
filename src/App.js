import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import FruitsDetails from './pages/Fruits/FruitsDetail/FruitsDetail';
import HomeFruit from './pages/Home/HomeFruit/HomeFruit';
import Fruits from './pages/Fruits/Fruits';
import AddFruits from './pages/Private/AddFruits/AddFruits';
import MyFruits from './pages/Private/MyFruits/MyFruits';
import NotFound from './pages/Shared/NotFound/NotFound';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/fruits' element={
          <RequireAuth>
            <Fruits></Fruits>
          </RequireAuth>
        }></Route>
        <Route path='/addfruits' element={
          <RequireAuth>
            <AddFruits></AddFruits>
          </RequireAuth>
        }></Route>
        <Route path='/myfruits' element={
          <RequireAuth>
            <MyFruits></MyFruits>
          </RequireAuth>
        }></Route>
        <Route path='/fruitsDetails' element={<RequireAuth>
          <FruitsDetails></FruitsDetails>
        </RequireAuth>}></Route>
        <Route path='/homefruit' element={
          <RequireAuth>
            <HomeFruit></HomeFruit>
          </RequireAuth>
        }></Route>
        <Route path='/homefruit/:id' element={
          <RequireAuth>
            <FruitsDetails></FruitsDetails>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
