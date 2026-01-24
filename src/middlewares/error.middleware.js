/**
 * Middleware global de errores
 * Express lo reconoce porque tiene 4 parámetros
 */
export const errorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal server error'
  });
};
