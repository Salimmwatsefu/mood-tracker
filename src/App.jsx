import './App.css';
import Home from './components/home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {
  

  return (
    <>


    <Routes>
      <Route index path='/' element={<Home />} />
    </Routes>
      
    </>
  )
}

export default App
