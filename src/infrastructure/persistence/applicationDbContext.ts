import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    errorFormat: 'pretty',
    log: [
        { level: 'warn', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
        { level: "query", emit: "event" }
    ]
});

async function testConnection() {
    try {
        await prisma.$connect();
        console.log("STATUS CONNECTION => Prisma connection success");
    } catch (error) {
        console.error("STATUS CONNECTION => Prisma connection fail", error);
        process.exit(1)
    }
}

testConnection();

export default prisma;