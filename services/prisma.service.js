const { PrismaClient } = require("@prisma/client")

class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        }
      }
    })
  }
}

const prisma = new PrismaService();
module.exports = prisma;