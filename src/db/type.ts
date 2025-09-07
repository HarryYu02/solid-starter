import type * as z from "zod";
import type { zodSchemas } from "./zodSchema";

type SchemaMap = typeof zodSchemas;

export type TableTypes = {
  [K in keyof SchemaMap]: {
    select: z.infer<SchemaMap[K]["select"]>;
    insert: z.infer<SchemaMap[K]["insert"]>;
    update: z.infer<SchemaMap[K]["update"]>;
  };
};
