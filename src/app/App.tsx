import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { HomePage } from "@/pages/HomePage";
import { PowerliftingPage } from "@/pages/PowerliftingPage";
import { BodybuildingPage } from "@/pages/BodybuildingPage";
import { ConstructorPage } from "@/pages/ConstructorPage";

export function App() {
  const [page, setPage] = useState("powerlifting");

  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <Sidebar page={page} setPage={setPage} />

      <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1400px]">
          {page === "home" && <HomePage onNavigate={setPage} />}
          {page === "powerlifting" && <PowerliftingPage />}
          {page === "bodybuilding" && <BodybuildingPage />}
          {page === "constructor" && <ConstructorPage />}
        </div>
      </main>
    </div>
  );
}