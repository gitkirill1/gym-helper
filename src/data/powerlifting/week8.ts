import { ArrowDownToLine, Shield, Trophy } from "lucide-react";
import type { TrainingWeek } from "@/types/program";

export const week8: TrainingWeek = {
  week: 8,
  days: [
    {
      day: "День 1",
      exercises: [
        {
          name: "Становая тяга",
          prescribedWeight: 100,
          sets: 1,
          reps: "Тест 1ПМ",
          type: "main",
          icon: ArrowDownToLine,
        },
      ],
    },
    {
      day: "День 2",
      exercises: [
        {
          name: "Жим лежа",
          prescribedWeight: 100,
          sets: 1,
          reps: "Тест 1ПМ",
          type: "main",
          icon: Shield,
        },
      ],
    },
    {
      day: "День 3",
      exercises: [
        {
          name: "Приседания",
          prescribedWeight: 100,
          sets: 1,
          reps: "Тест 1ПМ",
          type: "main",
          icon: Trophy,
        },
      ],
    },
  ],
};