import { useState } from "react";
import { Edit, Settings, LifeBuoy, LogOut, ChevronDown } from "lucide-react";

export default function UserPerfDrop() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src="/logo.png" alt="User" />
        </span>

        <span className="block mr-1 font-medium text-gray-700">Administrador</span>
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={18}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-4 w-64 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
          <div>
            <span className="block font-medium text-gray-700">Administrador</span>
            <span className="mt-0.5 block text-sm text-gray-500">douumhelp@gmail.com</span>
          </div>

          <ul className="flex flex-col gap-1 pt-4 pb-3 border-t border-gray-200">
            <li>
              <button
                onClick={closeDropdown}
                className="flex w-full items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Edit size={20} />
                Edit profile
              </button>
            </li>
            <li>
              <button
                onClick={closeDropdown}
                className="flex w-full items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Settings size={20} />
                Account settings
              </button>
            </li>
            <li>
              <button
                onClick={closeDropdown}
                className="flex w-full items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <LifeBuoy size={20} />
                Support
              </button>
            </li>
          </ul>

          <button
            onClick={closeDropdown}
            className="flex w-full items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
