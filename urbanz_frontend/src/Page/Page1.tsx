import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Home() {
  return (
<>
      <style>
        {`
          body {
            background-image: url(${process.env.PUBLIC_URL}/urbanZ.png);
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
      <div>
        <h2 style={{ color: "black", marginLeft: "5%", marginTop: "6%", fontFamily: "Gotham" }}>UrbanZ</h2>
        <p style={{ marginTop: "2%", marginLeft: "5%", textAlign: "left" }}>
          <a href="http://localhost:3000/home/shirts" style={{ textDecoration: "none", color: "black" }}>
            Shirts
          </a>
        </p>
        <p style={{ marginTop: "0.7%", marginLeft: "5%", textAlign: "left" }}>
          <a href="http://localhost:3000/home/shorts" style={{ textDecoration: "none", color: "black" }}>
            Shorts
          </a>
        </p>
        <p style={{ marginTop: "0.7%", marginLeft: "5%", textAlign: "left" }}>
          <a href="http://localhost:3000/home/accesories" style={{ textDecoration: "none", color: "black" }}>
            Accessories
          </a>
        </p>
      </div>
    </>
  );
}
