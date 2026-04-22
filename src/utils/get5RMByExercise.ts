type LiftProfile = {
  bench5RM: number | string;
  squat5RM: number | string;
  deadlift5RM: number | string;
};

export function get5RMByExercise(name: string, profile: LiftProfile) {
  const lower = name.toLowerCase();

  if (lower.includes("присед")) return profile.squat5RM;
  if (lower.includes("станов")) return profile.deadlift5RM;
  if (lower.includes("жим")) return profile.bench5RM;

  return 0;
}