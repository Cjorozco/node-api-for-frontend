/**
 * Middleware de logging
 * Se ejecuta ANTES de que la request llegue a la ruta
 */
export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // sin esto, la request se queda colgada
};
