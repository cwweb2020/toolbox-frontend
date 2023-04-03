import React from "react";
import NavBar from "./components/Navbar";
import TableComponent from "./components/Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar brandName="React Test App" />
      <TableComponent />
    </>
  );
}

export default App;
