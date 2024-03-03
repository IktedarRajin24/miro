import React from "react";

const Menu = ({ menuItems, onSetView }) => {
  return menuItems.map((menuItem) => (
    <div
      key={menuItem}
      className="md:px-10 px-3 md:py-2 py-1 border border-slate-200 hover:bg-slate-200 transition-colors duration-300 ease-in cursor-pointer rounded-full w-fit"
      onClick={() => onSetView(menuItem)}
    >
      {menuItem}
    </div>
  ));
};

export default Menu;
