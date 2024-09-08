import React from "react";
import Browse from "../assets_socket/Browse";
import Camera from "../assets_socket/Camera";
import Schedule from "../assets_socket/Schedule";
import Settings from "../assets_socket/Settings";
import Logout from "../assets_socket/Logout";
import Send from "../assets_socket/Send";
import { logout } from "../services/auth/authService";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const handlelogout = async () => {
    const response = await logout();
    if (response) {
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col mt-5 flex-grow gap-[3px]">
        <Browse />
        <Send />
        <Camera />
        <Schedule />
      </div>

      <div className="flex flex-col mt-auto gap-[3px]">
        <Settings />
        <div onClick={() => handlelogout()}>
          <Logout />
        </div>
      </div>
    </div>
  );
}
