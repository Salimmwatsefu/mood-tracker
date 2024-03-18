import './App.css';
import InstructorLogin from './components/Authentication/InstructorLogin';
import InstructorSignup from './components/Authentication/InstructorSignup';
import StudentLogin from './components/Authentication/StudentLogin';
import StudentSignup from './components/Authentication/StudentSignup';
import ChooseMood from './components/Student/Mood/ChooseMood'
import Intensity from './components/Student/Mood/Intensity';
import Student from './components/Student/studentPage';
import Home from './components/home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/student-login' element={<StudentLogin />} />
      <Route path='/student-signup' element={<StudentSignup />} />
      <Route path='/instructor-login' element={<InstructorLogin />} />
      <Route path='/instructor-signup' element={<InstructorSignup />} />
      <Route path='/choose-mood' element={<ChooseMood />} />
      <Route path='/choose-mood/intensity' element={<Intensity />} />
      <Route path='/student' element={<Student />} />

    </Routes>
    </>
  )
}

export default App
