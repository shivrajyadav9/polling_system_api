import express from 'express';
const router = express.Router();

import optionsController from '../controllers/options_controller.js';

router.get('/:id/add_vote',optionsController.addVote);
router.delete('/:id/delete',optionsController.destroy);

export default router;

