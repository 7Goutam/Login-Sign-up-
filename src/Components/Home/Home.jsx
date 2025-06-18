import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../Context/LoginContext';

const Home = () => {
  const { user } = useContext(LoginContext); // ✅ GET USER
  const navigate = useNavigate();

  const login = () => {
    user ? navigate('/profile') : navigate('/login');
  };

  const signup = () => {
    user ? navigate('/profile') : navigate('/signup');
  };

  return (
    <div className="w-[375px] h-[812px] mx-auto bg-[#F7F8F9] px-6 flex flex-col justify-end">
      <div className="flex flex-col gap-[29px] justify-end pb-[21px]">
        <div>
          <div className="font-medium text-[28px] w-[231px] h-[33px] mb-2.5 text-[#1D1D1D]">
            Welcome to PopX
          </div>
          <p className="w-[232px] h-[48px] text-[18px] text-[#1D1D1D] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <button
            className="bg-[#6C25FF] hover:bg-[#6e25ffdc] h-[46px] rounded-[6px] text-white font-medium cursor-pointer"
            onClick={signup}
          >
            Create Account
          </button>
          <button
            className="bg-[#6C25FF4B] hover:bg-[#6e25ff6a] h-[46px] rounded-[6px] text-[#1D1D1D] font-medium cursor-pointer"
            onClick={login}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
