import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const InstructorLogin = () => {
  const [formData, setFormData] = useState({
    uname: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const loginMutation = useMutation((formData) =>
    fetch('http://127.0.0.1:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.uname,
        password: formData.password,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await loginMutation.mutateAsync(formData);
      const { access_token, username } = result;
      
      // Use the login function from useAuth to handle authentication
      login(access_token, username);

      // Redirect to the desired page upon successful login
      navigate('/instructor-class');
  
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };
 
  const goBack = () => {
    // Add logic to go back to the previous page
    window.history.back();
  };
 
  return (
    <section className="bg-gray-100  lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-1 flex flex-wrap ">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <button className="absolute top-5 left-4" onClick={goBack}>
                <IoIosArrowBack className=" text-3xl font-bo" />
              </button>
              <div className="mb-10 text-center md:mb-5">
                <a
                  href="/#"
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <img
                    src="/logom.png"
                    alt="logo"
                    className=" w-20"
                  />
                  <h1 className=" font-semibold text-xl">Moodly</h1>
                </a>
              </div>
              <form onSubmit={handleSubmit}>
                <h2 className=" text-left text-sm font-medium mb-5 text-[#549CE1] ">Instructor Login:</h2>
                <InputBox type="text" name="uname" placeholder="Username"
                  value={formData.uname}
                  onChange={handleChange}
                />
                <InputBox
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <div className="mb-10">
                  <button
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-md border  px-5 py-3 text-base font-medium  transition hover:bg-opacity-90 bg-[#FF4967] text-white"
                  >Submit</button>
                </div>
              </form>
              <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                Connect With
              </p>
              <ul className="-mx-2 mb-12 flex justify-between ">
                {/* Add social media icons here */}
              </ul>
              <a
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                Forget Password?
              </a>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Not a member yet?</span>
                <Link to={'/instructor-signup'}>
                  <span
                    className="text-[#49497D] underline hover:text-red-500 ml-2"
                  >
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorLogin;

const InputBox = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-stroke bg-white px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none  "
      />
    </div>
  );
};
