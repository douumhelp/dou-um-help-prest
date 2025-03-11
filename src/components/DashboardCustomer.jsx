import {  Package, Sparkles } from "lucide-react";

export default function DashboardCustomer() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex gap-4 justify-start">
        {/* Card: Clientes */}
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col w-[307px] h-[202px]">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
            <Package className="text-gray-800 size-6" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500">Quantidade de Solicitações</span>
              <h4 className="mt-2 font-bold text-gray-800 text-2xl">5</h4>
            </div>
          </div>
        </div>

        {/* Card: Pedidos */}
        <div className="bg-white shadow-md p-6 rounded-lg flex flex-col w-[307px] h-[202px] ms-2">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
            <Sparkles className="text-gray-800 size-6" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500">Avaliações  gerais dos Clientes</span>
              <h4 className="mt-2 font-bold text-gray-800 text-2xl">7.8/10</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
