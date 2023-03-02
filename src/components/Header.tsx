import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {HiArrowSmLeft} from 'react-icons/hi'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let breadcrumb = location.pathname.substring(1).replaceAll("/", " > ");

  return (
    <div className="h-[3rem] bg-gray-100 flex items-center px-4 space-x-2">
      <HiArrowSmLeft onClick={()=>navigate(-1)} size={28} className="cursor-pointer opacity-50"/>
      <p className="font-[400] text-[1rem] capitalize">
        {breadcrumb ? breadcrumb : "Welcome"}
      </p>
    </div>
  );
};

export default Header;
