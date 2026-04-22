import { Dumbbell, Home, Menu, Trophy } from "lucide-react";

type SidebarProps = {
  page: string;
  setPage: (page: string) => void;
};

export function Sidebar({ page, setPage }: SidebarProps) {
  const items = [
    { key: "home", label: "Главная", icon: Home },
    { key: "powerlifting", label: "Пауэрлифтинг", icon: Trophy },
    { key: "bodybuilding", label: "Бодибилдинг", icon: Dumbbell },
    { key: "constructor", label: "Конструктор", icon: Menu },
  ];

  return (
    <aside className="flex min-h-screen w-full flex-col justify-between bg-slate-950 px-4 py-6 text-white md:w-72 md:rounded-r-3xl">
      <div className="space-y-8">
        <div className="flex items-start gap-3 px-2">
          <div className="rounded-2xl bg-blue-600/20 p-3 text-blue-400">
            <Dumbbell className="h-7 w-7" />
          </div>
          <div>
            <div className="text-2xl font-bold">GymHelper</div>
            <div className="mt-1 text-sm text-slate-400">Твой помощник в зале</div>
          </div>
        </div>

        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = page === item.key;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setPage(item.key)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                  active ? "bg-blue-600 text-white shadow-lg" : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      
    </aside>
  );
}