import { z, ZodFormattedError } from "zod"
import { DraftProductSchema, ProductSchema } from "../schemas"

export type DraftProductType = z.infer<typeof DraftProductSchema>
export type ZodErrorType = ZodFormattedError<DraftProductType>
export type ProductType = z.infer<typeof ProductSchema>