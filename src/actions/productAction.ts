import { ActionFunctionArgs, json, redirect } from "react-router"
import { addProduct, updateProduct } from "../services/productService"
import { DraftProductSchema } from "../schemas"

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData()
  const intent = formData.get("intent")

  if (intent === "new") {
    const productData = Object.fromEntries(formData)
    const result = DraftProductSchema.safeParse(productData)

    if (!result.success) {
      console.log(result.error.format())
      return result.error.format()
    }

    // wait until Add product succeed
    await addProduct(result.data)

    return redirect("/")
  }

  if (intent === "edit") {
    const id = Number(params.id)
    if (isNaN(id) || id === 0) {
      throw new Error("Invalid product id")
    }
    const newProductData = Object.fromEntries(formData)

    const result = DraftProductSchema.safeParse(newProductData)
    if (!result.success) {
      return result.error.format()
    }

    // // wait until update product succeed
    await updateProduct(id, result.data)

    return redirect("/")
  }

  throw json(
    { message: "Invalid Intent" },
    { status: 400 }
  )
}