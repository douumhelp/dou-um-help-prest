import { Filter, Eye } from "lucide-react";

const tableData = [
  { id: 1, name: "Ar condicionado", image: "ar-condicionado.png", variants: "Instalação", category: "Ar condicionado", price: "R$ 240,00", status: "Concluído" },
  { id: 2, name: "Chuveiro", image: "chuveiro.png", variants: "Instalação", category: "Ar condicionado", price: "R$ 100,00", status: "Pendente" },
  { id: 3, name: "Ar condicionado", image: "ar-condicionado.png", variants: "Instalação", category: "Ar condicionado", price: "R$ 240,00", status: "Pendente"},
  { id: 4, name: "Chuveiro", image: "chuveiro.png", variants: "Instalação", category: "Ar condicionado", price: "R$ 240,00", status: "Concluído" },
  { id: 5, name: "Ar condicionado", image: "ar-condicionado.png", variants: "Instalação", category: "Ar condicionado", price: "R$ 240,00", status: "Cancelado" },
];

export default function DashboardRecentServices() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Serviços Recentes</h3>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-[5px]">
            <Filter className="size-5" /> Filtrar
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-[5px]">
            <Eye className="size-5" /> Visualizar Tudo
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 ">
          {/* Cabeçalho */}
          <thead className="text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Serviço</th>
              <th className="py-3 px-4 text-left">Categoria</th>
              <th className="py-3 px-4 text-left">Valor do Serviço</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>

          {/* Corpo da Tabela */}
          <tbody className="divide-y divide-gray-200">
            {tableData.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-3">
                  <img src={`/img/${product.image}`} className="h-[26px] w-[50px] object-cover rounded-md" alt={product.name} />
                  <div>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <span className="text-gray-500 text-xs">{product.variants}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500">{product.category}</td>
                <td className="py-3 px-4 text-gray-500">{product.price}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${
                      product.status === "Concluído" ? "bg-green-500" :
                      product.status === "Pendente" ? "bg-[#DC6803]" :
                      product.status === "Cancelado" ? "bg-red-500" : "bg-gray-300"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
