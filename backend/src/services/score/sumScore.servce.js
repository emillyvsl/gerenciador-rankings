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

        // Modificando a estrutura da resposta para incluir os dados do jogador e a soma das pontuações
        const sums = await Promise.all(scores.map(async (score) => {
            const player = await prisma.player.findUnique({
                where: {
                    id: score.playerId
                },
                select: {
                    id: true,
                    name: true // Selecione outros campos do jogador conforme necessário
                }
            });
            return {
                playerId: score.playerId,
                player: player, // Inclui os dados do jogador na resposta
                totalScore: score._sum.score
            };
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
