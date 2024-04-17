import { getPlayersService } from "../../services/players/getPlayers.service.js";

const getPlayerController = async (req, res) => {
    const player = await getPlayersService();
    return res.status(200).json(player);
};

export { getPlayerController };