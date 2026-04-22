type HomePageProps = {
  onNavigate: (page: string) => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  const sections = [
    {
      key: "powerlifting",
      title: "Пауэрлифтинг",
      description:
        "8-недельная программа с расчетом рабочих весов, выбором дополнительных упражнений и тестовой неделей.",
      buttonLabel: "Открыть пауэрлифтинг",
    },
    {
      key: "bodybuilding",
      title: "Бодибилдинг",
      description:
        "Программы по уровням подготовки: начальный, средний и продвинутый. Удобный просмотр тренировочных дней и упражнений.",
      buttonLabel: "Открыть бодибилдинг",
    },
    {
      key: "constructor",
      title: "Конструктор",
      description:
        "Создавай свои тренировочные дни, добавляй упражнения, редактируй их и сохраняй всё даже после обновления страницы.",
      buttonLabel: "Открыть конструктор",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            GymHelper
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-500">
            Помощник для тренировок в тренажерном зале. Выбирай готовую программу
            или собирай собственный тренировочный план под свои цели.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.key}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>

            <p className="mt-4 min-h-[120px] text-sm leading-7 text-slate-500">
              {section.description}
            </p>

            <button
              type="button"
              onClick={() => onNavigate(section.key)}
              className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {section.buttonLabel}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}