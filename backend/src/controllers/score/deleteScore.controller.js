import { deleteScoreService } from "../../services/score/deleteScore.service.js";

const deleteScoreController = async (req, res) => {
    const { id } = req.params;

    const score = await deleteScoreService(id);
    return res.status(200).json(score);

}
export { deleteScoreController };