import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AccessorySelect } from "@/components/powerlifting/AccessorySelect";
import { FiveRMCard } from "@/components/powerlifting/FiveRMCard";
import { WeekSelector } from "@/components/powerlifting/WeekSelector";
import { WorkoutDayCard } from "@/components/powerlifting/WorkoutDayCard";
import { powerliftingProgram } from "@/data/powerlifting";
import { get5RMByExercise } from "@/utils/get5RMByExercise";
import { loadFromStorage, saveToStorage } from "@/utils/storage";
import type { UserLifts } from "@/types/user";

const POWERLIFTING_WEEK_KEY = "gym-helper-powerlifting-week";
const POWERLIFTING_BENCH_5RM_KEY = "gym-helper-bench-5rm";
const POWERLIFTING_SQUAT_5RM_KEY = "gym-helper-squat-5rm";
const POWERLIFTING_DEADLIFT_5RM_KEY = "gym-helper-deadlift-5rm";
const POWERLIFTING_ACCESSORIES_KEY = "gym-helper-powerlifting-accessories";

const defaultAccessories: Record<string, string> = {
  "horizontal-row": "Тяга штанги в наклоне",
  "vertical-row": "Вертикальный блок",
  "vertical-press": "Армейский жим гантелей",
};

export function PowerliftingPage() {
  const [week, setWeek] = useState(() =>
    loadFromStorage<string>(POWERLIFTING_WEEK_KEY, "1")
  );
  const [squat5RM, setSquat5RM] = useState(() =>
    loadFromStorage<string>(POWERLIFTING_SQUAT_5RM_KEY, "100")
  );
  const [bench5RM, setBench5RM] = useState(() =>
    loadFromStorage<string>(POWERLIFTING_BENCH_5RM_KEY, "100")
  );
  const [deadlift5RM, setDeadlift5RM] = useState(() =>
    loadFromStorage<string>(POWERLIFTING_DEADLIFT_5RM_KEY, "100")
  );

  const [selectedAccessories, setSelectedAccessories] = useState<Record<string, string>>(() =>
    loadFromStorage<Record<string, string>>(
      POWERLIFTING_ACCESSORIES_KEY,
      defaultAccessories
    )
  );

  useEffect(() => {
    saveToStorage(POWERLIFTING_WEEK_KEY, week);
  }, [week]);

  useEffect(() => {
    saveToStorage(POWERLIFTING_SQUAT_5RM_KEY, squat5RM);
  }, [squat5RM]);

  useEffect(() => {
    saveToStorage(POWERLIFTING_BENCH_5RM_KEY, bench5RM);
  }, [bench5RM]);

  useEffect(() => {
    saveToStorage(POWERLIFTING_DEADLIFT_5RM_KEY, deadlift5RM);
  }, [deadlift5RM]);

  useEffect(() => {
    saveToStorage(POWERLIFTING_ACCESSORIES_KEY, selectedAccessories);
  }, [selectedAccessories]);

  const currentWeek = powerliftingProgram.weeks.find((item) => String(item.week) === week);

  const profile: UserLifts = {
    bench5RM,
    squat5RM,
    deadlift5RM,
  };

  const selectAccessory = (groupId: string, exercise: string) => {
    setSelectedAccessories((prev) => ({
      ...prev,
      [groupId]: exercise,
    }));
  };

  const hasDays = Boolean(currentWeek?.days?.length);
  const isTestWeek = week === "8";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Пауэрлифтинг</h1>
        <p className="mt-2 text-lg text-slate-500">
          8-недельная программа с расчетом рабочих весов.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <FiveRMCard
          bench5RM={bench5RM}
          deadlift5RM={deadlift5RM}
          squat5RM={squat5RM}
          setBench5RM={setBench5RM}
          setDeadlift5RM={setDeadlift5RM}
          setSquat5RM={setSquat5RM}
        />

        <div className="space-y-6">
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="space-y-6 pt-6">
              <WeekSelector
                totalWeeks={powerliftingProgram.durationWeeks}
                currentWeek={week}
                onSelectWeek={setWeek}
              />

              {!isTestWeek ? (
                <>
                  <Separator />

                  <div>
                    <div className="text-2xl font-semibold text-slate-900">
                      Дополнительные упражнения
                    </div>

                    <div className="mt-5 grid gap-4 xl:grid-cols-3">
                      {powerliftingProgram.accessoryGroups.map((group) => (
                        <AccessorySelect
                          key={group.id}
                          group={group}
                          value={selectedAccessories[group.id]}
                          onChange={(value) => selectAccessory(group.id, value)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="text-3xl font-bold text-slate-900">Неделя {week}</h2>

        {hasDays ? (
          currentWeek!.days.map((day) => (
            <WorkoutDayCard
              key={day.day}
              day={day}
              selectedAccessories={selectedAccessories}
              get5RMByExercise={get5RMByExercise}
              profile={profile}
            />
          ))
        ) : (
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="pt-6 text-slate-500">
              Эта неделя пока не заполнена.
            </CardContent>
          </Card>
        )}

        {!isTestWeek ? (
          <div className="text-sm text-slate-500">т — тяжёлый день, л — лёгкий день</div>
        ) : (
          <div className="text-sm text-slate-500">
            8 неделя — тестовая. Дополнительные упражнения скрыты.
          </div>
        )}
      </div>
    </div>
  );
}