import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPlayersService = async () => {
    const players = await prisma.player.findMany();
    return players;
};

export { getPlayersService };