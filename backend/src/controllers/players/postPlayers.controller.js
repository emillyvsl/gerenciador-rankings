import { postPlayersService } from "../../services/players/postPlayers.service.js";

const postplayersController = async (req, res) => {
    const player = req.body;
    const newPlayer = await postPlayersService(player);
    return res.status(201).json(newPlayer);
};
export { postplayersController };