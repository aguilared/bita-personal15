// prisma.config.ts
import "dotenv/config"; // Loads environment variables from a .env file
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Path to your schema.prisma file
  schema: "prisma/schema.prisma",

  // Configuration for database migrations
  migrations: {
    // The directory where migrations will be generated
    path: "prisma/migrations",
    // A script to run for `prisma db seed`
    seed: "tsx prisma/seed.ts",
  },

  // Configuration for the database
  datasource: {
    // The database URL is loaded from the DATABASE_URL environment variable
    // The env() helper is type-safe and does not replace the need for dotenv
    url: env("DATABASE_URL"),
  },

  // Other experimental features can be enabled here if needed
  // experimental: {
  //   externalTables: true,
  // },
});
