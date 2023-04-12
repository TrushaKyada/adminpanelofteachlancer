import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Nav from './component/Nav';
function App() {
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={token?<Nav></Nav>:<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
