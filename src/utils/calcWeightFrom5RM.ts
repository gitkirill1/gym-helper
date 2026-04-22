export function calcWeightFrom5RM(user5RM: number | string, baseValue: number) {
  const base = 100;
  const ratio = Number(user5RM) / base;
  const raw = Number(baseValue) * ratio;
  return Number.isFinite(raw) ? Math.round(raw / 2.5) * 2.5 : 0;
}