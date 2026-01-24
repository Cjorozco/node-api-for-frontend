import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

/**
 * Login SIMULADO
 * En la vida real validarías usuario/contraseña
 */
router.post('/login', (req, res) => {
  const { email } = req.body;

  // Usuario mockeado
  const user = {
    id: 1,
    email
  };

  /**
   * Creamos el token
   * Payload = lo que el backend confía
   */
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.json({ token });
});

export default router;
