import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../Context/LoginContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { setUserdata } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserdata({
      name: 'John Doe', 
      email: form.email,
    });

    navigate('/profile');
  };

  return (
    <div className="w-[375px] h-[812px] mx-auto bg-[#F7F8F9] px-6 py-6 flex flex-col justify-start gap-8">
      <div className="mt-6">
        <h2 className="text-[22px] font-semibold text-[#1D1D1D] leading-[33px] mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-[#1D1D1D] opacity-60 text-[14px]">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-[23px] h-[max-content] relative'>
        <div className='relative text-[13px]' >
          <input className='border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px]' name="email" onChange={handleChange} placeholder='Enter email address' required type="email" />
          <p className='absolute -top-1/2 translate-y-1/2 left-[9px] pl-[5px] bg-[#F7F8F9] text-[#6C25FF]'>Email address</p>
        </div>
        <div className='relative text-[13px]' >
          <input className='border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px]' name="password" onChange={handleChange} placeholder='Enter password' required type="password" minLength={8} />
          <p className='absolute -top-1/2 translate-y-1/2 left-[9px] pl-[5px] bg-[#F7F8F9] text-[#6C25FF]'>Password</p>
        </div>
        <button className='w-full bg-[#6C25FF] hover:bg-[#CBCBCB] h-[46px] rounded-[6px] text-white font-medium cursor-pointer' type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
