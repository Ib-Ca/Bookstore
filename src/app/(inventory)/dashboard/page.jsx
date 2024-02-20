'use client'
import SideBar from "@/components/navs/sideBar";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
const Inventario = () => {
  const cookies = useCookies();
  const [role, setRole] = useState("");

  useEffect(() => {
    const cookieInfo = cookies.get("info");
    if (cookieInfo) {
      const aux = JSON.parse(cookieInfo);
      setRole(aux.role);
    }
  }, [cookies]);

  return (
    <>
      {role === "admin" ? (
        <SideBar/>
      ) : (
        <div>No tienes acceso a esta página</div>
      )}
    </>
  );
};

export default Inventario