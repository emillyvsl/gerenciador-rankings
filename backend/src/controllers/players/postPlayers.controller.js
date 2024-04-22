import { postPlayersService } from "../../services/players/postPlayers.service.js";
import { postScoreSrvice } from "../../services/score/postScore.servie.js";

const postplayersController = async (req, res) => {
    const player = req.body;
    const newPlayer = await postPlayersService(player);
    const data ={
        player: newPlayer.id,
        score: 0
    };
    const newScore = await postScoreSrvice(data);  
    
    return res.status(201).json(newPlayer);
};
export { postplayersController };