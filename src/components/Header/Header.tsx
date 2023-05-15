import React from "react";
import Logo from "./components/Logo";
import GroupButtons from "./group/GroupButtons";

function Header() {
  return (
    <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center  ">
      <div>
        <Logo />
      </div>
      <div className="mt-8 lg:mt-0 flex justify-center items-center">
        <GroupButtons />
      </div>
    </header>
  );
}

export default Header;
