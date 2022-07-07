import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="flex justify-between items-center h-12 mt-14 px-7 bg-dark-lighten">
      <p className="hidden md:block">Copyright Duynb &copy; 2022</p>
      <p className="block md:hidden">Duynb &copy;</p>
    </div>
  );
};

export default Footer;
