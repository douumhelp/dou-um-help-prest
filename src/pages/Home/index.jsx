import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import DashboardCustomer from "../../components/DashboardCustomer";
import DashboardFaturaments from "../../components/DashboardFaturaments";
import DashboardRecentServices from "../../components/DashboardRecentServices";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="pl-64 pr-4 pt-6 pb-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 ms-5">Dashboard</h1>

          <div className="grid grid-cols-2 gap-6 ms-5 items-start">
            {/* Linha 1 */}
            <DashboardCustomer />
            <div className="ml-16">
              <DashboardFaturaments />
            </div>

            {/* Linha 2 - DashboardRecentServices */}
            <div className="col-span-2 w-full mt-6">  
              <DashboardRecentServices />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
