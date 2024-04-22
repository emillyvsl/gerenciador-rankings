import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postPlayersService = async (player) => {
    const newPlayer = await prisma.player.create({
        data: player
    });
    return newPlayer;
};
export { postPlayersService };