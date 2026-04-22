type LevelSelectorProps = {
  levels: { key: string; label: string }[];
  currentLevel: string;
  onSelectLevel: (level: string) => void;
};

export function LevelSelector({
  levels,
  currentLevel,
  onSelectLevel,
}: LevelSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {levels.map((level) => {
        const active = level.key === currentLevel;

        return (
          <button
            key={level.key}
            type="button"
            onClick={() => onSelectLevel(level.key)}
            className={`rounded-2xl border px-5 py-3 font-medium transition ${
              active
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
          >
            {level.label}
          </button>
        );
      })}
    </div>
  );
}