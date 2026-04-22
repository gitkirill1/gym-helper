export const advancedProgram = {
  key: "advanced",
  label: "Продвинутый",
  description: "Высокий объем и более детальная проработка мышечных групп.",
  weeks: Array.from({ length: 8 }, (_, index) => ({
    week: index + 1,
    days: [
      {
        day: "День 1",
        muscleGroup: "Грудь + передняя дельта",
        exercises: [
          { name: "Жим лежа", sets: 5, reps: "5-8" },
          { name: "Жим в хаммере", sets: 4, reps: "8-10" },
          { name: "Разведение гантелей", sets: 4, reps: "10-12" },
          { name: "Сведение рук в кроссовере", sets: 3, reps: "12-15" },
        ],
      },
      {
        day: "День 2",
        muscleGroup: "Спина + задняя дельта",
        exercises: [
          { name: "Подтягивания с весом", sets: 5, reps: "5-8" },
          { name: "Тяга Т-грифа", sets: 4, reps: "8-10" },
          { name: "Тяга верхнего блока узким хватом", sets: 4, reps: "10-12" },
          { name: "Разведения в наклоне", sets: 4, reps: "12-15" },
        ],
      },
      {
        day: "День 3",
        muscleGroup: "Ноги",
        exercises: [
          { name: "Приседания", sets: 5, reps: "5-8" },
          { name: "Жим ногами", sets: 4, reps: "10-12" },
          { name: "Румынская тяга", sets: 4, reps: "8-10" },
          { name: "Разгибание ног", sets: 3, reps: "12-15" },
        ],
      },
      {
        day: "День 4",
        muscleGroup: "Плечи",
        exercises: [
          { name: "Жим штанги сидя", sets: 4, reps: "6-8" },
          { name: "Махи в стороны", sets: 5, reps: "12-20" },
          { name: "Тяга к подбородку", sets: 3, reps: "10-12" },
          { name: "Обратная бабочка", sets: 4, reps: "12-15" },
        ],
      },
      {
        day: "День 5",
        muscleGroup: "Руки",
        exercises: [
          { name: "Сгибание рук со штангой", sets: 4, reps: "8-10" },
          { name: "Сгибание рук на скамье Скотта", sets: 3, reps: "10-12" },
          { name: "Жим узким хватом", sets: 4, reps: "8-10" },
          { name: "Разгибание рук на блоке", sets: 3, reps: "12-15" },
        ],
      },
    ],
  })),
};