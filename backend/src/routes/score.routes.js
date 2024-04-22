import {Router} from 'express';
import { getScorerController } from '../controllers/score/getScore.controller.js';
import { postScoreController } from '../controllers/score/postScore.controller.js';
import { sumScoreController } from '../controllers/score/sumScore.controller.js';
import { deleteScoreController } from '../controllers/score/deleteScore.controller.js';

const scoreRouter = Router();

scoreRouter.get('/',getScorerController);
scoreRouter.post('/',postScoreController);
scoreRouter.get('/soma',sumScoreController);
scoreRouter.delete('/:id',deleteScoreController);

export {scoreRouter};