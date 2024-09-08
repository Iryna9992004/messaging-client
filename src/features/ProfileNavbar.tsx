import React, { useEffect, useState } from "react";

export default function ProfileNavbar() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.companyName) {
        setUserName(parsedUser.companyName);
      } else if (parsedUser.firstName && parsedUser.lastName) {
        setUserName(`${parsedUser.firstName} ${parsedUser.lastName}`);
      }
    }
  }, []);
  return (
    <div className="flex flex-col">
      <div className="text-xl font-oswald mb-2 text-gray-600 font-semibold">
        Welcome, {userName}!
      </div>
      <div className="text-sm text-gray-400">Tue, 07 June 2022</div>
    </div>
  );
}
