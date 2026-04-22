import { Check, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ConstructorExercise } from "@/types/constructor";

type ConstructorExerciseRowProps = {
  exercise: ConstructorExercise;
  isEditingDay: boolean;
  isEditingExercise: boolean;
  onStartEditing: () => void;
  onFinishEditing: () => void;
  onChange: (
    exerciseId: string,
    field: keyof Omit<ConstructorExercise, "id">,
    value: string
  ) => void;
  onDelete: () => void;
};

export function ConstructorExerciseRow({
  exercise,
  isEditingDay,
  isEditingExercise,
  onStartEditing,
  onFinishEditing,
  onChange,
  onDelete,
}: ConstructorExerciseRowProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {isEditingDay && isEditingExercise ? (
            <div className="space-y-3">
              <Input
                value={exercise.name}
                onChange={(e) => onChange(exercise.id, "name", e.target.value)}
                placeholder="Название упражнения"
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  value={exercise.sets}
                  onChange={(e) => onChange(exercise.id, "sets", e.target.value)}
                  placeholder="Подходы"
                />

                <Input
                  value={exercise.reps}
                  onChange={(e) => onChange(exercise.id, "reps", e.target.value)}
                  placeholder="Повторения"
                />
              </div>

              <Textarea
                value={exercise.notes}
                onChange={(e) => onChange(exercise.id, "notes", e.target.value)}
                placeholder="Заметки"
              />
            </div>
          ) : (
            <>
              <div className="text-lg font-semibold text-slate-900">{exercise.name}</div>

              <div className="mt-2 text-sm text-slate-500">
                {exercise.sets} подхода • {exercise.reps} повторений
              </div>

              {exercise.notes ? (
                <div className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-600">
                  {exercise.notes}
                </div>
              ) : null}
            </>
          )}
        </div>

        {isEditingDay ? (
          <div className="flex items-center gap-2">
            {!isEditingExercise ? (
              <button
                type="button"
                onClick={onStartEditing}
                className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
                title="Редактировать упражнение"
              >
                <Pencil className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onFinishEditing}
                className="rounded-xl border border-emerald-200 p-2 text-emerald-600 transition hover:bg-emerald-50"
                title="Сохранить упражнение"
              >
                <Check className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onDelete}
              className="rounded-xl border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
              title="Удалить упражнение"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}