import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const sumScoreService = async () => {
    try {
        const scores = await prisma.score.groupBy({
            by: ["playerId"],
            _sum: {
                score: true
            }
        });

        // Modificando a estrutura da resposta para conter apenas a soma das pontuações
        const sums = scores.map(score => ({
            playerId: score.playerId,
            totalScore: score._sum.score
        }));

        return sums;
    } catch (error) {
        console.error('Erro ao calcular as pontuações totais:', error);
        throw error;
    } finally {
        await prisma.$disconnect(); // Desconectar do banco de dados ao finalizar
    }
};
export { sumScoreService };
