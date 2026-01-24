import jwt from 'jsonwebtoken';

/**
 * Middleware de autenticación
 * Se ejecuta ANTES de llegar a una ruta protegida
 */
export const authMiddleware = (req, res, next) => {
  /**
   * El frontend envía el token normalmente así:
   * Authorization: Bearer <token>
   */
  const authHeader = req.headers.authorization;

  // Si no hay header, no hay token → no autorizado
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  /**
   * Separar el "Bearer" del token real
   * "Bearer token123" → ["Bearer", "token123"]
   */
  const token = authHeader.split(' ')[1];

  try {
    /**
     * Verificamos el token:
     * - Si fue alterado → error
     * - Si el secret no coincide → error
     * - Si es válido → devuelve el payload
     */
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    /**
     * Guardamos el usuario en req
     * para que la ruta lo pueda usar
     */
    req.user = decoded;

    // Continuamos hacia la ruta protegida
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
