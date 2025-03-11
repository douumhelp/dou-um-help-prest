import { useState } from "react";
import { Menu, Search, Bell, MessageCircle } from "lucide-react";
import UserPerfDrop from "./UserPerfDrop";

const Header = ({ onToggle }) => {
  return (
    <header className="sticky top-0 flex w-full bg-white border-b border-gray-200 z-50 px-6 py-4">
      <div className="flex items-center justify-between w-full">
        <button className="block md:hidden text-gray-500" onClick={onToggle}>
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center">
          <form action="#" method="POST" className="relative">
            <button className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search size={20} className="text-gray-500" />
            </button>
            <input
              type="text"
              placeholder="Buscar Serviço"
              className="h-11 w-72 rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-400"
            />
          </form>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg">
            <Bell size={24} />
          </button>
          <button className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg">
            <MessageCircle size={24} />
          </button>
          <UserPerfDrop />
        </div>
      </div>
    </header>
  );
};

export default Header;
