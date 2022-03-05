import React from "react";
import { BsSearch } from "react-icons/bs";
import logo from "../../../../assets/images/logo.png";
import { ContainerLayout } from "../../Layouts/ContainerLayout";

export const AppBar = () => {
  //search handler
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("search clicked");
  };

  return (
    <nav className="py-4 bg-gray">
      <ContainerLayout classNames="flex items-center justify-between">
        <div className="relative w-32 h-16">
          <img className="object-cover w-full h-full " src={logo} alt="logo" />
        </div>
        <div>
          <form className="flex items-center gap-2" onSubmit={handleSearch}>
            <input
              className="px-2 py-1 border rounded-full shadow-sm outline-none border-gray focus:border focus:border-red"
              type="text"
              placeholder="Search here..."
            />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
      </ContainerLayout>
    </nav>
  );
};
