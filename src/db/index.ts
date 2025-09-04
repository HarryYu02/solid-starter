import "dotenv/config";
import { drizzle } from "drizzle-orm/better-sqlite3";

export const db = drizzle(process.env.DATABASE_URL);

// const result = await db.run("select 1");
// console.log(result);
