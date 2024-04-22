import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteScoreService = async (id) => {
    try {
        id = parseInt(id);
        const score = await prisma.score.deleteMany({
            where: {
                playerId: id
            }
        });

        return score;
    } catch (error) {
        console.error('Erro ao deletar pontuação:', error);
        throw error;
    } 
}
export { deleteScoreService };
