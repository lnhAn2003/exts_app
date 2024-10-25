import { Router } from 'express';
import TutorialController from '../controllers/tutorial.controller';

const router = Router();

// Routes
router.post('/tutorials', TutorialController.create);
router.get('/tutorials', TutorialController.findAll);
router.get('/tutorials/:id', TutorialController.findById);
router.put('/tutorials/:id', TutorialController.update);
router.delete('/tutorials/:id', TutorialController.delete);

export default router;
