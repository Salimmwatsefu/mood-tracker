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
import InsHome from './components/instructor/InsHome';
import InstructorClass from './components/instructor/InstructorClass';
import MoodHome from './components/Student/Mood/MoodHome';
import { useEffect } from 'react';
import ThankYou from './components/Student/Mood/ThankYou';
import Suggestions from './components/Student/Mood/Suggestions/Suggestions';




function App() {

  const location = useLocation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  

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
      <Route path='/mood-home' element={<MoodHome />} />


      <Route path='instructor-home/:sessionId' element={<InsHome />} />
      <Route path='/instructor-class' element={<InstructorClass />} />
      <Route path='/thankyou' element={<ThankYou />} />
      <Route path='/suggestions' element={<Suggestions />} />


    </Routes>
    </>
  )
}

export default App
