import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../Context/LoginContext';

const Home = () => {
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();

  const login = () => {
    user ? navigate('/profile') : navigate('/login');
  };

  const signup = () => {
    user ? navigate('/profile') : navigate('/signup');
  };

  return (
    <div className="min-h-screen w-full max-w-sm mx-auto bg-[#F7F8F9] flex flex-col justify-between px-6 py-8">
      
      {/* Top spacer (optional logo area) */}
      <div className="flex-1 flex items-end">
        <div>
          <h1 className="font-medium text-[28px] text-[#1D1D1D] mb-2.5">
            Welcome to PopX
          </h1>
          <p className="text-[18px] text-[#1D1D1D] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      </div>

      {/* Bottom button area */}
      <div className="flex flex-col gap-4 mt-10">
        <button
          type="button"
          className="bg-[#6C25FF] hover:bg-[#6e25ffdc] h-[46px] rounded-[6px] text-white font-medium"
          onClick={signup}
        >
          Create Account
        </button>
        <button
          type="button"
          className="bg-[#6C25FF4B] hover:bg-[#6e25ff6a] h-[46px] rounded-[6px] text-[#1D1D1D] font-medium"
          onClick={login}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
