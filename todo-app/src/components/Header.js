import React from "react";

const styles = {
  header: {
    backgroundColor: "#111",
    color: "#fff",
    margin: 0,
  },
  h1: {
    fontSize: 20,
    padding: 10,
  },
};

function Header() {
  return (
    <header className="header" id="header">
      <h1 className="header">TODO LIST</h1>
    </header>
  );
}
export default Header;
