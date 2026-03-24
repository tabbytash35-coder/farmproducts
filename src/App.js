import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
<BrowserRouter>
    <div className="App">
      {/* navbar goes here  */}
      <Navbar/>


      <header className="App-header">
        <h1 className='text-primary'>Prido Farm products</h1>
      </header>

    <nav>
      <Link to="/signup" className='btn btn-primary btn-sm m-1'>Signup</Link> 
      <Link to="/signin" className='btn btn-primary btn-sm m-1'>Signin </Link> 
      <Link to="/addproduct" className='btn btn-primary btn-sm m-1'>Addproduct </Link> 
      <Link to="/" className='btn btn-primary btn-sm m-1'>Getproduct</Link> 
    </nav>
     
  
     <Routes>
      <Route path="/" element={<Getproduct/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/addproduct" element={<Addproduct/>} />
      <Route path="/makepayment" element={<Mpesapayment/>} />
     </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
