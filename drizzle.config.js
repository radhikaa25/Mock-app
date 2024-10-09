/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:2yUMrJIOpN4Z@ep-spring-art-a517swde.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };