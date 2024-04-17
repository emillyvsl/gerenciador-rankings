import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getScoreService = async () => {
    const scores = await prisma.score.findMany({
        include: {
            player: true
        }
    });
    return scores;
};
export { getScoreService };