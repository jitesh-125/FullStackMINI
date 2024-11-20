
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compontes/Navbar';
import Home from './compontes/Home';
import AddProduct from './compontes/AddProduct';
import EditProduct from './compontes/EditProduct';


function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home />}></Route>
      <Route  path='/addProduct' element={<AddProduct />}></Route>
      <Route  path='/editProduct/:id' element={<EditProduct />}></Route>
    </Routes>
   
   </>
  );
}

export default App;
