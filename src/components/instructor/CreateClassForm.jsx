import React, { useState } from 'react';
import Modal from '../home/Modal';
import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from '../Authentication/AuthContext';

function CreateClassForm({ onClose }) {
  const { user, getToken } = useAuth();
  const queryClient = useQueryClient();
  

  const [formData, setFormData] = useState({
    classTitle: '',
  });

  const createClassMutation = useMutation(
    (formData) =>
      fetch('http://127.0.0.1:5000/api/v1/class-session/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({
          session_name: formData.classTitle,
        }),
      }).then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error creating class:', errorText);
          throw new Error('Class creation failed');
        }
        return response.json();
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('classSessions');
        onClose();
      },
    }
  );

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateClick = () => {
    if (createClassMutation.isLoading) {
      // Request is already in progress, ignore the click
      return;
    }

    if (!formData.classTitle || formData.classTitle.length < 3) {
      console.error('Invalid class title. Please enter a title with at least 3 characters.');
      return;
    }

    createClassMutation.mutate(formData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleCreateClick();
  };

  return (
    <div>
      <Modal onClose={onClose}>
        <h1>Create a class for:</h1>
        <div className='mt-5'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <p className='mt-10 sm:text-base text-sm'>
                A student's class helps students track feelings. Anonymous student classes do not track individual feelings
                and do not require students to log in. Protecting privacy is highly recommended.
              </p>
              <p className='mt-5 sm:text-base text-sm'>
                Give your class an easy name to remember and then hit create to get started
              </p>
              <div className='flex justify-center mt-3'>
                <input
                  type='text'
                  placeholder='Class title'
                  name='classTitle'
                  value={formData.classTitle}
                  onChange={handleChange}
                  className='border-b border-t-0 mb-20 md:mb-0 border-x-0 focus-visible:shadow-none outline-none focus:outline-none focus:border-x-0'
                  required
                />
              </div>
              <div className='flex gap-10 sm:right-10 bottom-5 right-28 absolute'>
                <button className='text-[#D64937] font-semibold' onClick={onClose} type='button'>
                  Cancel
                </button>
                <button
                  type='submit'
                  className={`text-[#D64937] font-semibold ${
                    (!formData.classTitle || formData.classTitle.length < 3) && 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!formData.classTitle || formData.classTitle.length < 3}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default CreateClassForm;
