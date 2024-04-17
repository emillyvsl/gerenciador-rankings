import { sumScoreService } from "../../services/score/sumScore.servce.js";

const sumScoreController = async (req, res) => {
    const scores = await sumScoreService();
    res.status(200).json(scores);
}
export { sumScoreController };