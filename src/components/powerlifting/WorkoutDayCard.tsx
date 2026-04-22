import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExerciseCard } from "@/components/powerlifting/ExerciseCard";
import type { WorkoutDay } from "@/types/program";
import type { UserLifts } from "@/types/user";

type WorkoutDayCardProps = {
  day: WorkoutDay;
  selectedAccessories: Record<string, string>;
  get5RMByExercise: (name: string, profile: UserLifts) => number | string;
  profile: UserLifts;
};

export function WorkoutDayCard({
  day,
  selectedAccessories,
  get5RMByExercise,
  profile,
}: WorkoutDayCardProps) {
  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl text-slate-900">{day.day}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-4 xl:grid-cols-3">
          {day.exercises.slice(0, 3).map((exercise, index) => (
            <ExerciseCard
              key={`${day.day}-${exercise.name}-${index}`}
              exercise={exercise}
              selectedAccessories={selectedAccessories}
              get5RMByExercise={get5RMByExercise}
              profile={profile}
            />
          ))}
        </div>

        {day.exercises[3] ? (
          <ExerciseCard
            exercise={day.exercises[3]}
            selectedAccessories={selectedAccessories}
            get5RMByExercise={get5RMByExercise}
            profile={profile}
          />
        ) : null}
      </CardContent>
    </Card>
  );
}