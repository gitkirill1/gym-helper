import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { ConstructorDayCard } from "@/components/constructor/ConstructorDayCard";
import { createId } from "@/utils/createId";
import { loadFromStorage, saveToStorage } from "@/utils/storage";
import type {
  ConstructorDay,
  ConstructorExercise,
} from "@/types/constructor";

const CONSTRUCTOR_DAYS_KEY = "gym-helper-constructor-days";
const CONSTRUCTOR_ACTIVE_DAY_KEY = "gym-helper-constructor-active-day";

export function ConstructorPage() {
  const [days, setDays] = useState<ConstructorDay[]>(() =>
    loadFromStorage<ConstructorDay[]>(CONSTRUCTOR_DAYS_KEY, [])
  );

  const [activeDayId, setActiveDayId] = useState<string | null>(() =>
    loadFromStorage<string | null>(CONSTRUCTOR_ACTIVE_DAY_KEY, null)
  );

  useEffect(() => {
    saveToStorage(CONSTRUCTOR_DAYS_KEY, days);
  }, [days]);

  useEffect(() => {
    saveToStorage(CONSTRUCTOR_ACTIVE_DAY_KEY, activeDayId);
  }, [activeDayId]);

  const addDay = () => {
    const nextDay = days.length + 1;
    const newDayId = createId();

    setDays((prev) => [
      ...prev,
      {
        id: newDayId,
        name: `День ${nextDay}`,
        exercises: [],
      },
    ]);

    setActiveDayId(newDayId);
  };

  const finishEditing = () => {
    setActiveDayId(null);
  };

  const renameDay = (dayId: string, value: string) => {
    setDays((prev) =>
      prev.map((day) =>
        day.id === dayId
          ? {
              ...day,
              name: value,
            }
          : day
      )
    );
  };

  const deleteDay = (dayId: string) => {
    setDays((prev) => prev.filter((day) => day.id !== dayId));
    setActiveDayId((prev) => (prev === dayId ? null : prev));
  };

  const addExercise = (
    dayId: string,
    exercise: Omit<ConstructorExercise, "id">
  ) => {
    setDays((prev) =>
      prev.map((day) => {
        if (day.id !== dayId) return day;

        return {
          ...day,
          exercises: [
            ...day.exercises,
            {
              id: createId(),
              ...exercise,
            },
          ],
        };
      })
    );
  };

  const updateExercise = (
    dayId: string,
    exerciseId: string,
    field: keyof Omit<ConstructorExercise, "id">,
    value: string
  ) => {
    setDays((prev) =>
      prev.map((day) => {
        if (day.id !== dayId) return day;

        return {
          ...day,
          exercises: day.exercises.map((exercise) =>
            exercise.id === exerciseId
              ? {
                  ...exercise,
                  [field]: value,
                }
              : exercise
          ),
        };
      })
    );
  };

  const deleteExercise = (dayId: string, exerciseId: string) => {
    setDays((prev) =>
      prev.map((day) => {
        if (day.id !== dayId) return day;

        return {
          ...day,
          exercises: day.exercises.filter(
            (exercise) => exercise.id !== exerciseId
          ),
        };
      })
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Конструктор
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Создай свою собственную программу тренировок.
        </p>
      </div>

      <button
        type="button"
        onClick={addDay}
        className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-white transition hover:bg-blue-700"
      >
        <Plus className="h-5 w-5" />
        Добавить тренировочный день
      </button>

      {days.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <div className="text-2xl font-semibold text-slate-900">
            Пока нет тренировочных дней
          </div>

          <div className="mt-3 text-slate-500">
            Нажми «Добавить тренировочный день», чтобы начать.
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {days.map((day) => (
            <ConstructorDayCard
              key={day.id}
              day={day}
              isEditing={activeDayId === day.id}
              onStartEditing={() => setActiveDayId(day.id)}
              onFinishEditing={finishEditing}
              onDeleteDay={() => deleteDay(day.id)}
              onRenameDay={renameDay}
              onAddExercise={addExercise}
              onUpdateExercise={updateExercise}
              onDeleteExercise={deleteExercise}
            />
          ))}
        </div>
      )}
    </div>
  );
}