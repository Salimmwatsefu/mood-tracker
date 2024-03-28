import React, { useState, useEffect } from 'react';
import { Card } from '@tremor/react';
import { useQuery } from 'react-query';
import { useAuth } from '../Authentication/AuthContext';


function ClassInfo({ sessionId, moods }) {

  const { user, getToken } = useAuth();
  const [dominantMood, setDominantMood] = useState({ name: 'Unknown', emoji: '❓' });




  const sessionIdString = sessionId.toString();
  const { data: classInfoData, isLoading, isError } = useQuery(['classInfo', sessionIdString], () => fetchClassInfo(sessionIdString));

  async function fetchClassInfo(sessionId) {
  
    try {
      
      const response = await fetch(`http://127.0.0.1:5000/api/v1/class-sessions/${sessionId}`, {
        headers: {
         
          Authorization: `Bearer ${getToken()}`,
          
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching class info');
      }

      const data = await response.json();
      return data; 
    } catch (error) {
      throw new Error('Error fetching class info');
    }
  }


 
  useEffect(() => {
    if (!moods || moods.length === 0) return;

    const mostDominantMood = moods.reduce((prev, current) => (prev.count > current.count ? prev : current));
    const emojiMapping = {
      angry: { name: 'Angry', emoji: '😡' },
      happy: { name: 'Happy', emoji: '😁' },
      surprised: { name: 'Surprised', emoji: '😮' },
      sad: { name: 'Sad', emoji: '😢' },
      fearful: { name: 'Fearful', emoji: '😱' },
    };

    const dominantMood = emojiMapping[mostDominantMood.mood.toLowerCase()] || { name: 'Unknown', emoji: '❓' };
    setDominantMood(dominantMood);
  }, [moods]);

  return (
    <div>
      <div>
        <Card className=' md:mx-2 mx-auto bg-tremor-background'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error fetching class info</p>}
          {classInfoData && (
            <div >
              <h1 className='pt-1  font-bold text-center text-lg underline'>{classInfoData.session_name || 'No Title'}</h1>
              <div className='flex gap-20 pt-3'>
              
             
              <div>
              
              <p className=' pt-2 text-sm font-normal text-gray-600'>
                Class code: <span className='font-bold text-lg text-red-500'>{classInfoData.code}</span>
              </p>
              <p className=' py-6 text-sm font-normal text-gray-600'>
                Number of students: <span className='font-bold text-lg text-black'>{classInfoData.num_students}</span>
              </p>
              <p className='text-sm pt-2 text-gray-600'>Created on: <span className=' text-black text-base'>{new Date(classInfoData.created_at).toLocaleDateString()}</span></p>
              </div>
              <div className=' '>
                <h1 className=' pt-2 text-gray-600 text-sm'>Overall class mood: <span className=' text-lg font-semibold ml-1'>{dominantMood.name}</span>  </h1>
                {/*Show mood emoji */}
                <p className=' text-6xl text-center mt-7'>{dominantMood.emoji}</p>
                </div>
              </div>
            </div>
            
          )}
        </Card>
      </div>
    </div>
  );
}

export default ClassInfo;
