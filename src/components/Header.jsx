import { useState } from "react";
import { Menu, Search, Bell, User } from "lucide-react";
import { Link } from "react-router";

const Header = ({ onClick, onToggle }) => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  return (
    <header className="sticky top-0 flex w-full bg-white border-b border-gray-200 z-50">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="block w-10 h-10 text-gray-500 lg:hidden"
            onClick={onToggle}
          >
            <Menu size={24} />
          </button>

          <button
            onClick={onClick}
            className="hidden w-11 h-11 text-gray-500 border border-gray-200 rounded-lg lg:flex items-center justify-center"
            >
            <Menu size={24} />
        </button>


          <Link to="/" className="lg:hidden">
            <img src="./images/logo/logo.svg" alt="Logo" />
          </Link>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Bell size={24} />
          </button>

          <div className="hidden lg:block">
            <form action="#" method="POST">
              <div className="relative">
                <button className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Search size={20} className="text-gray-500" />
                </button>
                <input
                  type="text"
                  placeholder="Buscar Serviço"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-300 focus:ring-3 focus:ring-blue-500/10 xl:w-[430px]"
                />
              </div>
            </form>
          </div>
        </div>

        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex lg:justify-end lg:px-0`}
        >
        </div>
      </div>
    </header>
  );
};

export default Header;
