import { Router } from 'express';
import healthRoutes from '@/routes/health.routes';

const router = Router();

router.use('/health', healthRoutes);

// Register additional feature routes here, e.g.:
// router.use('/users', userRoutes);

export default router;
