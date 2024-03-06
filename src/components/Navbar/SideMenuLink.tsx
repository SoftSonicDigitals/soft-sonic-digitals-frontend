import React from "react";
type NavLink = {
  title: string;
  link: string;
};
const SideMenuLink = ({ navLinks }: { navLinks: NavLink[] | undefined }) => {
  console.log(navLinks);
  return (
    <div>
      {navLinks?.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </div>
  );
};

export default SideMenuLink;
