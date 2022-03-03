import React from "react";
import logo from "../../../../assets/images/logo.png";

export const AppBar = () => {
  //search handler
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <nav className="flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <p className="text-brand">search</p>
          <input type="text" placeholder="Search here..." />
          <input className="border-0 bg-brand" type="submit" value="Search" />
        </form>
      </div>
    </nav>
  );
};
