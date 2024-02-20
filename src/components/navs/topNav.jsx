"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
import { useState } from "react";

const TopNav = () => {
  const router = useRouter();
  const cookies = useCookies();
  const [estado, setEstado] = useState(false);
  const [role, setRole] = useState("usuario");

 



  useEffect(() => {
    const cookieInfo = cookies.get("info");
    if (cookieInfo) {
      const aux = JSON.parse(cookieInfo);
      setEstado(aux.login);
      setRole(aux.role);
     // console.log("entro");
    }
  }, [cookies]);


  const handleRedirect = (route) => () => {
    router.push(route);
  };

  const handleLogout = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"} style={{ color: "white", textDecoration: "none" }}>
              E-Library
            </Link>
            {role === 'admin' && (
          <Link href={"/dashboard"} style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}>
            Dashboard
          </Link>
             )}
          </Typography>
          {estado ? (
            <Button color="inherit" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          ) : (
            <Button color="inherit" onClick={handleRedirect("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
