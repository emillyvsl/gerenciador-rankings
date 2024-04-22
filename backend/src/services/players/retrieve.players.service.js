import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrievePlayersService = async (id) => {
    try {
        id = parseInt(id);
        const players = await prisma.player.findMany({
            where: {
                id: id
            }
        });
        return players;
    } catch (error) {
        console.error('Erro ao buscar os jogadores:', error);
        throw error;
    } 
}
export { retrievePlayersService };