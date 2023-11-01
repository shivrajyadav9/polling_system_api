import express from 'express';
const router = express.Router();
import questionsController from '../controllers/questions_controller.js';
import optionsController from '../controllers/options_controller.js';

router.post('/create', questionsController.create);
router.get('/:id', questionsController.question);
router.post('/:id/options/create', optionsController.create);
router.delete('/:id/delete',questionsController.destroy);

export default router;