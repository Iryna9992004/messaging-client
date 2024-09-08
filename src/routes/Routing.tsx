import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./routes";

export default function Routing() {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
      navigate("/messaging");
    }
  }, [navigate]);

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.link}
          path={route.link}
          element={<route.component />}
        />
      ))}

      {protectedRoutes.map((route) => (
        <Route
          key={route.link}
          path={route.link}
          element={
            isAuthorized ? <route.component /> : <Navigate to="/" replace />
          }
        />
      ))}
    </Routes>
  );
}
