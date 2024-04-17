import {Router} from 'express';
import { getPlayerController } from '../controllers/players/getPlayer.controller.js';
import { postplayersController } from '../controllers/players/postPlayers.controller.js';

const playersRouter = Router();

playersRouter.get('/',getPlayerController);
playersRouter.post('/',postplayersController);

export {playersRouter};