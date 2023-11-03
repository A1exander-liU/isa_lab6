const { PrismaClient } = require("@prisma/client");
const { DATABASE_URL } = require("../utils/config");

class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: DATABASE_URL
        }
      }
    })
  }
}

const prisma = new PrismaService();
module.exports = prisma;