import React, { useState, useEffect } from 'react';
import InsNav from './InsNav';
import CreateClassForm from './CreateClassForm';
import { FaPlus } from 'react-icons/fa';
import { useAuth } from '../Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

function InstructorClass() {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const { user, getToken } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdClasses, setCreatedClasses] = useState([]);

  // Fetch created classes using React Query
  const { data: createdClassesData, isLoading, isError } = useQuery('classSessions', fetchClassSessions);

  async function fetchClassSessions() {
    try {
      // Fetch created classes from your API
      const response = await fetch('http://127.0.0.1:5000/api/v1/class-sessions/list', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching classes');
      }

      const data = await response.json();
      return data.class_sessions; 
    } catch (error) {
      throw new Error('Error fetching classes');
    }
  }

  const decodedString = atob("O31jKPKsFxUZswVMozNSpFOqp3SvTzBY9A5u24mztDerUsUxCP");
console.log(decodedString);


  useEffect(() => {
   
    // Check if the user is authenticated
    if (!user) {
      // Redirect to the login page if not authenticated
      navigate('/instructor-login');
    }
  }, [user, navigate]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateClass = (newClass) => {
    // Handle the creation of a new class
    console.log('New class created:', newClass);
    // Add the new class to the array of created classes
    setCreatedClasses([...createdClasses, { ...newClass, color: getRandomColor() }]);
    closeModal();
  };

  return (
    <div className='bg-gray-50'>
      <div>
        <InsNav />
      </div>
      <div className='py-20 grid-cols-4 md:grid ml-20'>
        {/*create a class card */}
        <button className='w-60 h-[300px]  b border border-gray-200 rounded-lg shadow-md bg-red-500' onClick={openModal}>
          <div className='rounded-t-lg h-12 -mt-[102px] '>
            <h1 className='text-center pt-3 text-gray-100'>Create a class</h1>
          </div>
          <div>
            <p className='text-center pt-8 text-sm'>To start tracking, create a new class and add students</p>
          </div>
          <div className='flex justify-center pt-10'>
            <FaPlus className='text-4xl' />
          </div>
        </button>

        {/*created cards */}
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching classes</p>
        ) : (
          createdClassesData.map((classData) => {

            return (
              <Link to={`/instructor-home/${classData.session_id}`}  key={classData.session_id}>
              <div
             // Use the session ID as the key
                className='sm:w-60 h-[320px]  b border border-gray-200 rounded-lg shadow-md mt-10 sm:mt-0 bg-white'
              >
                <div className='rounded-t-lg h-12 bg-blue-500 ' >
                  <h1 className='text-center pt-3 text-gray-100 font-bold'>{classData.session_name|| 'No Title'}</h1>
                </div>
                <div>
                  <p className='text-center pt-8 text-sm font-normal text-gray-600'>
                    Class code: <span className='font-bold text-lg text-black'>{classData.session_code}</span>
                  </p>
                  <p className='mt-10 text-center text-sm'>Created on: {new Date(classData.created_at).toLocaleDateString()}</p>
                </div>
                {/* Additional class details as needed */}
              </div>
              </Link>
            );
          })
        )}
      </div>

      {/* Render createclassform with onClose handler */}
      {isModalOpen && <CreateClassForm onClose={closeModal} onCreateClass={handleCreateClass} />}
    </div>
  );
}

export default InstructorClass;
