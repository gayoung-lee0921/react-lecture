import React, { useRef, useState } from "react";
import logo from "../assets/images/logo.png";

export default function Search({ onSearch }) {
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const onClick = () => {
    console.log(search);
    console.log(inputRef.current.value);
    onSearch(search);
  };
  const onKeyDown = () => {
    console.log(search);
    console.log(inputRef.current.value);
    onSearch(search);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>
          <img src={logo} alt="마이튜브" />
        </h1>
        <div className="search">
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onKeyDown();
              }
            }}
          />
          <button onClick={onClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
