import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { HomePage } from "@/pages/HomePage";
import { PowerliftingPage } from "@/pages/PowerliftingPage";
import { BodybuildingPage } from "@/pages/BodybuildingPage";
import { ConstructorPage } from "@/pages/ConstructorPage";

export function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const pageTitles: Record<string, string> = {
    home: "Главная",
    powerlifting: "Пауэрлифтинг",
    bodybuilding: "Бодибилдинг",
    constructor: "Конструктор",
  };

  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <Sidebar
        page={page}
        setPage={setPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur md:hidden">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-xl border border-slate-200 p-2 text-slate-700"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="text-lg font-semibold text-slate-900">
              {pageTitles[page]}
            </div>

            <div className="w-9" />
          </div>
        </header>

        <div className="mx-auto max-w-[1400px] px-4 py-5 md:px-8 md:py-8">
          {page === "home" && <HomePage onNavigate={setPage} />}
          {page === "powerlifting" && <PowerliftingPage />}
          {page === "bodybuilding" && <BodybuildingPage />}
          {page === "constructor" && <ConstructorPage />}
        </div>
      </main>
    </div>
  );
}