import React from 'react';

interface ProfileNavbarProps {
  userName: string;
}
export default function ProfileNavbar({ userName }: ProfileNavbarProps) {
  return (
    <div className="flex flex-col">
      <div className="text-xl font-oswald mb-2 text-gray-600 font-semibold">
        Welcome, {userName}!
      </div>
      <div className="text-sm text-gray-400">Tue, 07 June 2022</div>
    </div>
  );
}
