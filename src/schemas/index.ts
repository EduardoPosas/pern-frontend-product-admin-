import { z } from "zod"

export const DraftProductSchema = z.object({
  name: z.string().min(1, {
    message: "El campo es obligatorio"
  }),
  price: z.string().transform((val, ctx) => {
    const parsed = Number(val)
    if (!(parsed > 0)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debe ser un precio mayor a 0"
      })

      return z.NEVER
    }
    if (isNaN(parsed) || parsed === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debe ser un precio válido"
      })

      return z.NEVER
    }

    return parsed
  })
})

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string(),
  available: z.boolean()
})

export const ProductsSchema = z.array(ProductSchema)