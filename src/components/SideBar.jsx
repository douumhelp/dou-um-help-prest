import { LayoutGrid, Calendar, User, BarChart, Wallet, MessageCircle } from "lucide-react";

const navItems = [
  { icon: <LayoutGrid className="w-5 h-5" />, name: "Dashboard" },
  { icon: <Calendar className="w-5 h-5" />, name: "Calendário" },
  { icon: <User className="w-5 h-5" />, name: "Meu Perfil" },
  { icon: <BarChart className="w-5 h-5" />, name: "Métricas" },
  { icon: <Wallet className="w-5 h-5" />, name: "Carteira" },
  { icon: <MessageCircle className="w-5 h-5" />, name: "Chat" },
];

const SideBar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 p-5 overflow-y-auto">
      <div className="py-8 flex justify-center">
        <img src="/logo.png" alt="Logo" width={150} height={40} />
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
              {item.icon}
              <span className="text-gray-900 cursor-pointer">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
