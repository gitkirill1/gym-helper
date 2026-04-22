export type LiftTag = "т" | "л";

export type MainExercise = {
  name: string;
  prescribedWeight: number;
  sets: number;
  reps: string;
  type: "main";
  liftTag?: LiftTag;
  icon?: unknown;
};

export type AccessorySelectExercise = {
  name: string;
  selectorGroup: string;
  sets: number;
  reps: string;
  rpe: number;
  type: "accessory_select";
  icon?: unknown;
};

export type FixedAccessoryExercise = {
  name: string;
  sets: number;
  reps: string;
  rpe: number;
  type: "accessory_fixed";
  icon?: unknown;
};

export type Exercise =
  | MainExercise
  | AccessorySelectExercise
  | FixedAccessoryExercise;

export type WorkoutDay = {
  day: string;
  exercises: Exercise[];
};

export type TrainingWeek = {
  week: number;
  days: WorkoutDay[];
};

export type AccessoryGroup = {
  id: string;
  title: string;
  exercises: string[];
};