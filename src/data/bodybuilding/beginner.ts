export const beginnerProgram = {
  key: "beginner",
  label: "Начальный",
  description: "Базовая программа для набора формы и освоения техники.",
  weeks: Array.from({ length: 8 }, (_, index) => ({
    week: index + 1,
    days: [
      {
        day: "День 1",
        muscleGroup: "Грудь + трицепс",
        exercises: [
          { name: "Жим лежа", sets: 4, reps: "8-10" },
          { name: "Жим гантелей под углом", sets: 3, reps: "10-12" },
          { name: "Разведение гантелей лежа", sets: 3, reps: "12-15" },
          { name: "Разгибание рук на блоке", sets: 3, reps: "12-15" },
        ],
      },
      {
        day: "День 2",
        muscleGroup: "Спина + бицепс",
        exercises: [
          { name: "Тяга верхнего блока", sets: 4, reps: "10-12" },
          { name: "Тяга горизонтального блока", sets: 3, reps: "10-12" },
          { name: "Тяга гантели в наклоне", sets: 3, reps: "10-12" },
          { name: "Сгибание рук с гантелями", sets: 3, reps: "12-15" },
        ],
      },
      {
        day: "День 3",
        muscleGroup: "Ноги + плечи",
        exercises: [
          { name: "Приседания", sets: 4, reps: "8-10" },
          { name: "Жим ногами", sets: 3, reps: "10-12" },
          { name: "Жим гантелей сидя", sets: 3, reps: "10-12" },
          { name: "Махи в стороны", sets: 3, reps: "12-15" },
        ],
      },
    ],
  })),
};