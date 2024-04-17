import { postScoreSrvice } from "../../services/score/postScore.servie.js";

const postScoreController = async (req, res) => {
    const data = req.body;
    const newScore = await postScoreSrvice(data);  
    res.status(201).json(newScore);
};
export { postScoreController };