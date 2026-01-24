import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

/**
 * Ruta protegida
 * Solo entra si el token es válido
 */
router.get('/profile', authMiddleware, (req, res) => {
  /**
   * req.user viene del middleware
   * ya validado
   */
  res.json({
    message: 'Access granted',
    user: req.user
  });
});

export default router;
