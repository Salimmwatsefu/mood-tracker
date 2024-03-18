import './App.css';
import InstructorLogin from './components/Authentication/InstructorLogin';
import InstructorSignup from './components/Authentication/InstructorSignup';
import StudentLogin from './components/Authentication/StudentLogin';
import StudentSignup from './components/Authentication/StudentSignup';
import Home from './components/home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import InsHome from './components/instructor/InsHome';
import InstructorClass from './components/instructor/InstructorClass';



function App() {
  

  return (
    <>


    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/student-login' element={<StudentLogin />} />
      <Route path='/student-signup' element={<StudentSignup />} />
      <Route path='/instructor-login' element={<InstructorLogin />} />
      <Route path='/instructor-signup' element={<InstructorSignup />} />
      <Route path='instructor-home/:sessionId' element={<InsHome />} />
      <Route path='/instructor-class' element={<InstructorClass />} />
    </Routes>
      
    </>
  )
}

export default App
