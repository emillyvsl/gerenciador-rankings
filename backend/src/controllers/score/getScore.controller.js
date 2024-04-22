import { getScoreService } from "../../services/score/getScore.service.js";

const getScorerController = async (req, res) => {   
    const scores = await getScoreService();
    res.status(200).json(scores);
};
export { getScorerController };