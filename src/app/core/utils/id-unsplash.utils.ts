const MaxId = 8;

export function createUniqueUnsplashID(): number {
  //Math.ceil para redondear hacia arriba porque si devuelve 0 no existen photo:id=0
  return Math.ceil(Math.random() * MaxId);
}
