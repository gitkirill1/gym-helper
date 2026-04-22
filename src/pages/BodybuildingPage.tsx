import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LevelSelector } from "@/components/bodybuilding/LevelSelector";
import { BodybuildingDayCard } from "@/components/bodybuilding/BodybuildingDayCard";
import { bodybuildingPrograms } from "@/data/bodybuilding";

type BodybuildingLevelKey = keyof typeof bodybuildingPrograms;

export function BodybuildingPage() {
  const [level, setLevel] = useState<BodybuildingLevelKey>("beginner");
  

  const currentProgram = bodybuildingPrograms[level];
  const currentWeek = currentProgram.weeks[0];

  const levels = [
    { key: "beginner", label: "Начальный" },
    { key: "intermediate", label: "Средний" },
    { key: "advanced", label: "Продвинутый" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Бодибилдинг</h1>
        <p className="mt-2 text-lg text-slate-500">
          Выбери уровень подготовки и неделю программы.
        </p>
      </div>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">Уровень подготовки</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <LevelSelector
            levels={levels}
            currentLevel={level}
            onSelectLevel={(value) => setLevel(value as BodybuildingLevelKey)}
          />

          <div className="rounded-2xl bg-slate-50 px-4 py-4">
            <div className="text-xl font-semibold text-slate-900">{currentProgram.label}</div>
            <div className="mt-2 text-sm leading-6 text-slate-500">
              {currentProgram.description}
            </div>
          </div>

         
        </CardContent>
      </Card>

      <div className="space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">
  Программа • {currentProgram.label}
</h2>

        {currentWeek ? (
          currentWeek.days.map((day) => (
            <BodybuildingDayCard key={day.day} day={day} />
          ))
        ) : (
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="pt-6 text-slate-500">
              Неделя не найдена.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}