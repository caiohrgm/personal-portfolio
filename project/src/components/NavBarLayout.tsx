import { Outlet } from "react-router-dom";
import Header from "./Home/Header";

export default function Layout() {
  return (
    <div className="text-white min-h-screen w-full bg-dark-purple-900 flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-[1366px] mx-auto p-4 pt-20 flex flex-col">
        <Outlet /> {/* Este componente renderiza a página atual */}
      </main>
    </div>
  );
}
