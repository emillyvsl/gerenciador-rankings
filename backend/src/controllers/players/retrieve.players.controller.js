import { retrievePlayersService } from "../../services/players/retrieve.players.service.js";

const retrieveplayerController = async (req, res) => {
    const { id } = req.params;
    const players = await retrievePlayersService(id);
    return res.status(200).json(players);
}
export { retrieveplayerController };