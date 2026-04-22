import { Dumbbell, Home, Menu, Trophy, X } from "lucide-react";

type SidebarProps = {
  page: string;
  setPage: (page: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
};

export function Sidebar({
  page,
  setPage,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const items = [
    { key: "home", label: "Главная", icon: Home },
    { key: "powerlifting", label: "Пауэрлифтинг", icon: Trophy },
    { key: "bodybuilding", label: "Бодибилдинг", icon: Dumbbell },
    { key: "constructor", label: "Конструктор", icon: Menu },
  ];

  const handleNavigate = (target: string) => {
    setPage(target);
    setMobileOpen(false);
  };

  return (
    <>
      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col justify-between bg-slate-950 px-4 py-6 text-white transition-transform duration-300 md:static md:min-h-screen md:w-72 md:translate-x-0 md:rounded-r-3xl ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8">
          <div className="flex items-start justify-between gap-3 px-2">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-blue-600/20 p-3 text-blue-400">
                <Dumbbell className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">GymHelper</div>
                <div className="mt-1 text-sm text-slate-400">
                  Твой помощник в зале
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-slate-800 p-2 text-slate-300 md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {items.map((item) => {
              const Icon = item.icon;
              const active = page === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleNavigate(item.key)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300">
          Мобильная и десктопная навигация
        </div>
      </aside>
    </>
  );
}