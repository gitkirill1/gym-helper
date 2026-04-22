import type { AccessoryGroup } from "@/types/program";

export const accessoryGroups: AccessoryGroup[] = [
  {
    id: "horizontal-row",
    title: "Горизонтальная тяга",
    exercises: [
      "Тяга штанги в наклоне",
      "Горизонтальный блок",
      "Тяга гантели в наклоне",
      "Рычажная горизонтальная тяга",
    ],
  },
  {
    id: "vertical-row",
    title: "Вертикальная тяга",
    exercises: [
      "Подтягивания",
      "Вертикальный блок",
      "Рычажная вертикальная тяга",
    ],
  },
  {
    id: "vertical-press",
    title: "Вертикальный жим",
    exercises: [
      "Армейский жим гантелей",
      "Отжимания в стойке на руках",
      "Армейский жим гирь",
      "Армейский жим одной рукой",
      "Вертикальный жим штанги",
    ],
  },
];