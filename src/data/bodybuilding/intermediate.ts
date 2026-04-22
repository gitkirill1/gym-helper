export const intermediateProgram = {
  key: "intermediate",
  label: "Средний",
  description: "Более плотный сплит и увеличенный объем нагрузки.",
  weeks: Array.from({ length: 8 }, (_, index) => ({
    week: index + 1,
    days: [
      {
        day: "День 1",
        muscleGroup: "Грудь",
        exercises: [
          { name: "Жим лежа", sets: 4, reps: "6-8" },
          { name: "Жим гантелей под углом", sets: 4, reps: "8-10" },
          { name: "Сведение рук в кроссовере", sets: 3, reps: "12-15" },
          { name: "Отжимания на брусьях", sets: 3, reps: "8-12" },
        ],
      },
      {
        day: "День 2",
        muscleGroup: "Спина",
        exercises: [
          { name: "Подтягивания", sets: 4, reps: "6-10" },
          { name: "Тяга штанги в наклоне", sets: 4, reps: "8-10" },
          { name: "Тяга горизонтального блока", sets: 3, reps: "10-12" },
          { name: "Пуловер в блоке", sets: 3, reps: "12-15" },
        ],
      },
      {
        day: "День 3",
        muscleGroup: "Ноги",
        exercises: [
          { name: "Приседания", sets: 4, reps: "6-8" },
          { name: "Румынская тяга", sets: 4, reps: "8-10" },
          { name: "Выпады", sets: 3, reps: "10-12" },
          { name: "Сгибание ног лёжа", sets: 3, reps: "12-15" },
        ],
      },
      {
        day: "День 4",
        muscleGroup: "Плечи + руки",
        exercises: [
          { name: "Жим гантелей сидя", sets: 4, reps: "8-10" },
          { name: "Махи в стороны", sets: 4, reps: "12-15" },
          { name: "Сгибание рук со штангой", sets: 3, reps: "10-12" },
          { name: "Французский жим", sets: 3, reps: "10-12" },
        ],
      },
    ],
  })),
};