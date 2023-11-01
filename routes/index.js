import express from 'express';
const router = express.Router();

import homeController from '../controllers/home_controller.js';
router.get('/',homeController.home);

import questionRouter from './question.js';
router.use('/questions', questionRouter);

import optionsRouter from './option.js';
router.use('/options',optionsRouter);

export default router;