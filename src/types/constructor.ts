export type ConstructorExercise = {
  id: string;
  name: string;
  sets: string;
  reps: string;
  notes: string;
};

export type ConstructorDay = {
  id: string;
  name: string;
  exercises: ConstructorExercise[];
};