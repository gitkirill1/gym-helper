type BodybuildingExerciseCardProps = {
  exercise: {
    name: string;
    sets: number;
    reps: string;
  };
};

export function BodybuildingExerciseCard({
  exercise,
}: BodybuildingExerciseCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-slate-300">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-lg font-semibold text-slate-900">
            {exercise.name}
          </div>

          <div className="mt-2 text-sm text-slate-500">
            Подходы и повторения
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-2xl font-bold tracking-tight text-blue-600">
            {exercise.sets} × {exercise.reps}
          </div>
        </div>
      </div>
    </div>
  );
}