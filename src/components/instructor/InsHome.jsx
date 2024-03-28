// InsHome.js
import React, { useEffect, useState } from 'react';
import { InsDonutChart } from './InsDonutChart';
import InsBarGraph from './InsBarGraph';
import InsActivities from './InsActivities';
import InsNav from './InsNav';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';
import ClassInfo from './ClassInfo';
import ClassQuote from './ClassQuote';
import BASE_URL from '../../../apiConfig';


function InsHome() {
  const { sessionId } = useParams();
  const { user, getToken } = useAuth();
  const navigate = useNavigate();
  const [moods, setMoods] = useState([]);
  const [datedMoods, setDatedMoods] = useState([]);
  const [colors, setColors] = useState({});
  const [dominantMood, setDominantMood] = useState(null);
  const [dominantColor, setDominantColor] = useState(null);

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
      const response = await fetch(`${BASE_URL}/insights/class-climate-date?class_session_id=${classSessionId}`, {
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
      const response = await fetch(`${BASE_URL}/insights/class-climate?class_session_id=${classSessionId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch moods');
      }

      const data = await response.json();
      const sortedMoods = data.data.sort((a, b) => a.mood.localeCompare(b.mood)); // Sort moods alphabetically
      setMoods(sortedMoods);
    } catch (error) {
      console.error('Error fetching moods:', error.message);
    }
  };

  
 

  useEffect(() => {
    // Define the colors here
    const moodColors = {
      red: '#ef4444',
      cyan: '#06b6d4',
      amber: '#f59e0b',
      fuchsia: '#d946ef',
      lime: '#84cc16',
      violet: '#8b5cf6',
      green: '#22c55e',
      teal: '#14b8a6',
      blue: '#3b82f6',
      indigo: '#6366f1',
      pink: '#ec4899',
      stone: '#78716c',
      rose: '#f43f5e',
      sky: '#0ea5e9',
      orange: '#f97316',
      slate: '#64748b'
      
      // Add more mood-color mappings as needed
    };
    setColors(moodColors);
  }, []);

  const handleDominantColorChange = (color) => {
    setDominantColor(color);
  };

 
  return (
    <div style={{ backgroundColor: dominantColor }} >
      <InsNav />
    
      <div className='pb-20'>
        <div className='sm:flex gap-8 justify-center sm:pt-10 pt-5 mx-2'>
          <div>
            <ClassInfo sessionId={sessionId} moods={moods} />
            <InsDonutChart  moods={moods} colors={colors} onDominantMoodChange={setDominantMood} onDominantColorChange={handleDominantColorChange} />
            <ClassQuote />
          </div>
          <div className='w-full'>
            <InsBarGraph moods={datedMoods} sessionId={sessionId} colors={colors} />
            <InsActivities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsHome;
