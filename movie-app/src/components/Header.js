import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../components/Search";

export default function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <header className="header" id="header">
      <button onClick={back} className="back">
        <i class="fa-solid fa-angle-left"></i>
      </button>

      <h1>
        <Link to="/">Movie-App</Link>
      </h1>

      <Search></Search>
    </header>
  );
}
