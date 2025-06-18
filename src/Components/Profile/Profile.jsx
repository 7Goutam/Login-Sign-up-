import { useContext } from 'react';
import ellipseImg from '../../../public/images/Ellipse.png';
import cameraSvg from "../../../public/images/camera.svg";
import { LoginContext } from '../../Context/LoginContext';

const Profile = ({ handleLogout }) => {
  const { userdata } = useContext(LoginContext);

  return (
    <div className="w-[375px] mx-auto bg-white rounded-lg shadow p-5">
      <div className=" pb-4 mb-4">
        <h2 className=" h-[68] w-[375] font-medium text-[#1D1D1D] text-[18px] pl-[15px] pt-[27px]">Account Settings</h2>
      </div>

      <div className="grid grid-cols-[76px_1fr] grid-rows-2 h-[max-content] pt-[78px] gap-5 justify-start relative">
            <div className="w-[76px] h-[76px] rounded-full bg-amber-300 relative">
              <img src={ellipseImg} alt="" />
              <img src={cameraSvg} alt="" className="absolute bottom-0 right-0" />
            </div>
            <div className="flex flex-col">
              <p className="name font-medium text-[15px]"> Marry Doe</p>
              <p className="email text-[14px]"> Marry@Gmail.com</p>
            </div>
            <div className="content capitalize col-span-2 w-fit text-[14px]">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </div>
        </div>

     
    </div>
  );
};

export default Profile;
