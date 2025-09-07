import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import * as tables from "./schema";

export const zodSchemas = Object.fromEntries(
  Object.entries(tables).map(([name, table]) => [
    name,
    {
      select: createSelectSchema(table),
      insert: createInsertSchema(table),
      update: createUpdateSchema(table),
    },
  ]),
);
