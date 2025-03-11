import Chart from "react-apexcharts";
import { useState } from "react";
import { MoreVertical, TrendingUp, TrendingDown, TrendingUpIcon, LucideTrendingUp } from "lucide-react";

export default function DashboardFaturaments() {
  // Renomeei a variável para "value"
  const value = [70]; // Valor em porcentagem (70%)

  const options = {
    colors: ["#FACC15"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "80%",
        },
        track: {
          background: "#E4E7EC",
          strokeWidth: "100%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "#1D2939",
            formatter: function (val) {
              // Converte o valor de porcentagem para monetário
              const valorMonetario = (val * 10).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              });
              return valorMonetario; // Exibe como R$ 700,00
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#FACC15"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  return (
    <div className="w-[450px] h-[402px] rounded-2xl border border-gray-200 bg-white shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Faturamento Mensal</h3>
          <p className="mt-1 text-gray-500 text-sm">Acompanhe seus ganhos e veja seu desempenho.</p>
        </div>
        <MoreVertical className="text-gray-400 hover:text-gray-700 size-6 cursor-pointer" />
      </div>

      <div className="relative flex justify-center">
        {/* Aqui ainda usamos "series" porque é exigido pelo ApexCharts */}
        <Chart options={options} series={value} type="radialBar" height={330} />
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        Valor total acumulado neste mês.
      </p>

      <div className="flex items-center justify-around mt-4">
        <div className="text-center">
          <p className="text-gray-500 text-xs">Ganhos Líquidos</p>
          <p className="text-gray-800 font-semibold flex items-center gap-1">
            R$ 700,00 <TrendingDown className="text-red-500 size-4" />
          </p>
        </div>
        <div className="w-px bg-gray-300 h-6"></div>
        <div className="text-center">
          <p className="text-gray-500 text-xs">Ganhos Hoje</p>
          <p className="text-gray-800 font-semibold flex items-center gap-1">
            R$ 100,00 <TrendingUp className="text-green-500 size-4" />
          </p>
        </div>
        <div className="w-px bg-gray-300 h-6"></div>
        <div className="text-center">
          <p className="text-gray-500 text-xs">Serviços Concluídos</p>
          <p className="text-gray-800 font-semibold flex items-center gap-1">
            10 <TrendingUp className=" text-centertext-green-500 size-4" />
          </p>
        </div>
      </div>
    </div>
  );
}