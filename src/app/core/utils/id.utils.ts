// Un util es una funcion independiente

const MaxId = 1_000_000;

export function createUniqueID(): number {
  return Math.floor(Math.random() * MaxId);
}
