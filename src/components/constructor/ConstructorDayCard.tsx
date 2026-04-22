import { Check, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AddExerciseForm } from "@/components/constructor/AddExerciseForm";
import { ConstructorExerciseRow } from "@/components/constructor/ConstructorExerciseRow";
import type {
  ConstructorDay,
  ConstructorExercise,
} from "@/types/constructor";

type ConstructorDayCardProps = {
  day: ConstructorDay;
  isEditing: boolean;
  onStartEditing: () => void;
  onFinishEditing: () => void;
  onDeleteDay: () => void;
  onRenameDay: (dayId: string, value: string) => void;
  onAddExercise: (
    dayId: string,
    exercise: Omit<ConstructorExercise, "id">
  ) => void;
  onUpdateExercise: (
    dayId: string,
    exerciseId: string,
    field: keyof Omit<ConstructorExercise, "id">,
    value: string
  ) => void;
  onDeleteExercise: (dayId: string, exerciseId: string) => void;
};

export function ConstructorDayCard({
  day,
  isEditing,
  onStartEditing,
  onFinishEditing,
  onDeleteDay,
  onRenameDay,
  onAddExercise,
  onUpdateExercise,
  onDeleteExercise,
}: ConstructorDayCardProps) {
  const [activeExerciseId, setActiveExerciseId] = useState<string | null>(null);

  const handleFinishDayEditing = () => {
    setActiveExerciseId(null);
    onFinishEditing();
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {isEditing ? (
            <Input
              value={day.name}
              onChange={(e) => onRenameDay(day.id, e.target.value)}
              placeholder="Название тренировочного дня"
              className="h-12 rounded-xl text-lg font-semibold"
            />
          ) : (
            <div className="text-2xl font-bold text-slate-900">{day.name}</div>
          )}

          <div className="mt-2 text-sm text-slate-500">
            Упражнений: {day.exercises.length}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isEditing ? (
            <button
              type="button"
              onClick={onStartEditing}
              className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
              title="Редактировать"
            >
              <Pencil className="h-5 w-5" />
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={handleFinishDayEditing}
                className="rounded-xl border border-emerald-200 p-2 text-emerald-600 transition hover:bg-emerald-50"
                title="Готово"
              >
                <Check className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={onDeleteDay}
                className="rounded-xl border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
                title="Удалить день"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {day.exercises.map((exercise) => (
          <ConstructorExerciseRow
            key={exercise.id}
            exercise={exercise}
            isEditingDay={isEditing}
            isEditingExercise={activeExerciseId === exercise.id}
            onStartEditing={() => setActiveExerciseId(exercise.id)}
            onFinishEditing={() => setActiveExerciseId(null)}
            onChange={(exerciseId, field, value) =>
              onUpdateExercise(day.id, exerciseId, field, value)
            }
            onDelete={() => onDeleteExercise(day.id, exercise.id)}
          />
        ))}
      </div>

      {isEditing ? (
        <div className="mt-5">
          <AddExerciseForm
            onAdd={(exercise) => onAddExercise(day.id, exercise)}
          />
        </div>
      ) : null}
    </div>
  );
}