import { Circle, type LucideIcon } from "lucide-react";
import { calcWeightFrom5RM } from "@/utils/calcWeightFrom5RM";
import type { Exercise } from "@/types/program";
import type { UserLifts } from "@/types/user";

type ExerciseCardProps = {
  exercise: Exercise;
  selectedAccessories: Record<string, string>;
  get5RMByExercise: (name: string, profile: UserLifts) => number | string;
  profile: UserLifts;
};

export function ExerciseCard({
  exercise,
  selectedAccessories,
  get5RMByExercise,
  profile,
}: ExerciseCardProps) {
  const Icon = (exercise.icon as LucideIcon) || Circle;
  const isOneRMTest = exercise.type === "main" && exercise.reps === "Тест 1ПМ";

  if (exercise.type === "main") {
    if (isOneRMTest) {
      return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-slate-100 p-2.5 text-slate-700">
              <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
                  {exercise.name}
                </div>

                <span className="inline-flex items-center justify-center rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] font-semibold uppercase text-blue-700">
                  Тест
                </span>
              </div>

              <div className="mt-2 text-base text-slate-500">{exercise.reps}</div>
            </div>

            <div className="text-right">
              <div className="text-xl font-bold text-slate-900">1ПМ</div>
            </div>
          </div>
        </div>
      );
    }

    const workWeight = calcWeightFrom5RM(
      get5RMByExercise(exercise.name, profile),
      exercise.prescribedWeight
    );

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-slate-100 p-2.5 text-slate-700">
            <Icon className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
                {exercise.name}
              </div>

              {exercise.liftTag ? (
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-1.5 text-[11px] font-semibold uppercase text-slate-600">
                  {exercise.liftTag}
                </span>
              ) : null}
            </div>

            <div className="mt-2 text-base text-slate-500">
              {exercise.sets} x {exercise.reps}
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-slate-900">{workWeight} кг</div>
          </div>
        </div>
      </div>
    );
  }

  if (exercise.type === "accessory_select") {
    const chosen = selectedAccessories[exercise.selectorGroup] || exercise.name;

    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-slate-100 p-2.5 text-blue-600">
            <Icon className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
              {chosen}
            </div>
            <div className="mt-2 text-base text-slate-500">
              {exercise.sets} x {exercise.reps}
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-slate-900">RPE {exercise.rpe}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-100 p-2.5 text-slate-700">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-xl font-semibold leading-tight text-slate-900 md:text-2xl">
            {exercise.name}
          </div>
          <div className="mt-2 text-base text-slate-500">
            {exercise.sets} x {exercise.reps}
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-slate-900">RPE {exercise.rpe}</div>
        </div>
      </div>
    </div>
  );
}