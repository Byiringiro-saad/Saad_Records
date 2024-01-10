// Icons
import { MdOutlineLogout } from "react-icons/md";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center relative pt-20">
      <div className="flex items-center absolute top-4 right-10 cursor-pointer">
        <p>Logout</p>
        <MdOutlineLogout className="ml-2" />
      </div>
      <div className="flex flex-col items-center w-auto h-auto">
        <div className="flex w-24 h-24 rounded-full bg-gray" />
        <p className="text-black text-base mt-4">byiringirosaad@gmail.com</p>
      </div>
      {children}
    </div>
  );
};

export default Layout;
