import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postScoreSrvice = async (data) => {
    const { player, score } = data;
    const playerExists = await prisma.player.findUnique({
        where: {
            id: player
        }
    });
    if (playerExists) {
        const newScore = await prisma.score.create({
            data: {
                score: score,
                playerId: playerExists.id
            }
        });
        return newScore;
    } else {
        throw new Error("Player not found");
    }
};
export { postScoreSrvice};