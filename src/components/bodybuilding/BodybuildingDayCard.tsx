import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BodybuildingExerciseCard } from "@/components/bodybuilding/BodybuildingExerciseCard";

type BodybuildingDay = {
  day: string;
  muscleGroup: string;
  exercises: {
    name: string;
    sets: number;
    reps: string;
  }[];
};

type BodybuildingDayCardProps = {
  day: BodybuildingDay;
};

export function BodybuildingDayCard({ day }: BodybuildingDayCardProps) {
  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900">{day.day}</CardTitle>
        <div className="text-sm text-slate-500">{day.muscleGroup}</div>
      </CardHeader>

      <CardContent className="space-y-3">
        {day.exercises.map((exercise, index) => (
          <BodybuildingExerciseCard
            key={`${day.day}-${exercise.name}-${index}`}
            exercise={exercise}
          />
        ))}
      </CardContent>
    </Card>
  );
}