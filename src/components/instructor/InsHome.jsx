import React, {useEffect, useState} from 'react'
import { InsDonutChart } from './InsDonutChart'
import InsBarGraph from './InsBarGraph'
import InsActivities from './InsActivities'
import InsNav from './InsNav'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext'
import ClassInfo from './ClassInfo'
import ClassQuote from './ClassQuote'


function InsHome() {

  const { sessionId } = useParams();

  const { user, getToken } = useAuth();
  const navigate = useNavigate();
  const [moods, setMoods] = useState([]);
  const [datedMoods, setDatedMoods] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/instructor-login');
    } else {
      fetchMoods(sessionId);
      fetchdatedMoods(sessionId);
    }
  }, [user, navigate, sessionId]);


  

  const fetchdatedMoods = async (classSessionId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/v1/insights/class-climate-date?class_session_id=${classSessionId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch moods');
      }

      const data = await response.json();
      setDatedMoods(data.data);
    } catch (error) {
      console.error('Error fetching moods:', error.message);
    }
  };


  const fetchMoods = async (classSessionId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/v1/insights/class-climate?class_session_id=${classSessionId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch moods');
      }

      const data = await response.json();
      setMoods(data.data);
    } catch (error) {
      console.error('Error fetching moods:', error.message);
    }
  };


  

  const [dominantMoodColor, setDominantMoodColor] = useState('#fffff');

  const handleMostDominantMoodChange = (mostDominantMood) => {
    setDominantMoodColor(mostDominantMood.color);
  };


  return (
    <div style={{ backgroundColor: dominantMoodColor }}>
      <InsNav />

        <div className=' pb-20'>
            <div className='sm:flex gap-8  justify-center sm:pt-10 pt-5 mx-2'>
              <div className=' '>
            <ClassInfo sessionId={sessionId} moods={moods} />
                <InsDonutChart  onMostDominantMoodChange={handleMostDominantMoodChange} moods={moods} />
                <ClassQuote />
                </div>

                <div className='w-full  '>
                
                <InsBarGraph moods={datedMoods} sessionId={sessionId} />
                <InsActivities />
                
                </div>

                </div>
                
                

              
        </div>
    </div>
  )
}

export default InsHome