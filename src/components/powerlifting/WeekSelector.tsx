type WeekSelectorProps = {
  totalWeeks: number;
  currentWeek: string;
  onSelectWeek: (week: string) => void;
};

export function WeekSelector({
  totalWeeks,
  currentWeek,
  onSelectWeek,
}: WeekSelectorProps) {
  return (
    <div>
      <div className="text-lg font-semibold text-slate-900">Неделя</div>

      <div className="mt-3 flex flex-wrap gap-2">
        {Array.from({ length: totalWeeks }, (_, index) => {
          const week = String(index + 1);
          const active = week === currentWeek;

          return (
            <button
              key={week}
              type="button"
              onClick={() => onSelectWeek(week)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition ${
                active
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {week}
            </button>
          );
        })}
      </div>
    </div>
  );
}