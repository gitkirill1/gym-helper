import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type FiveRMCardProps = {
  bench5RM: string;
  deadlift5RM: string;
  squat5RM: string;
  setBench5RM: (value: string) => void;
  setDeadlift5RM: (value: string) => void;
  setSquat5RM: (value: string) => void;
};

export function FiveRMCard({
  bench5RM,
  deadlift5RM,
  squat5RM,
  setBench5RM,
  setDeadlift5RM,
  setSquat5RM,
}: FiveRMCardProps) {
  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900">Твои 5ПМ</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-500">Жим лежа (кг)</label>
          <Input
            value={bench5RM}
            onChange={(e) => setBench5RM(e.target.value)}
            className="h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-500">Становая тяга (кг)</label>
          <Input
            value={deadlift5RM}
            onChange={(e) => setDeadlift5RM(e.target.value)}
            className="h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-500">Приседания (кг)</label>
          <Input
            value={squat5RM}
            onChange={(e) => setSquat5RM(e.target.value)}
            className="h-12 rounded-xl"
          />
        </div>

        <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-700">
  Укажи свои 5ПМ для пересчета рабочих весов. 5ПМ — это максимальный вес,
  который ты можешь поднять на 5 повторений.
</div>
      </CardContent>
    </Card>
  );
}