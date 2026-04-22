import { Dumbbell, Rows3, ArrowUpToLine } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AccessoryGroup } from "@/types/program";

type AccessorySelectProps = {
  group: AccessoryGroup;
  value: string;
  onChange: (value: string) => void;
};

export function AccessorySelect({ group, value, onChange }: AccessorySelectProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="mb-3 text-sm font-medium text-slate-500">{group.title}</div>

      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700">
          {group.id === "horizontal-row" ? (
            <Rows3 className="h-4 w-4" />
          ) : group.id === "vertical-row" ? (
            <ArrowUpToLine className="h-4 w-4" />
          ) : (
            <Dumbbell className="h-4 w-4" />
          )}
        </div>

        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="h-11 rounded-xl border-slate-200 text-left">
            <SelectValue placeholder="Выбери упражнение" />
          </SelectTrigger>
          <SelectContent>
            {group.exercises.map((exercise) => (
              <SelectItem key={exercise} value={exercise}>
                {exercise}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}