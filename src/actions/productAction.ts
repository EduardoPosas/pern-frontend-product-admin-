import { ActionFunctionArgs, json, redirect } from "react-router"
import { addProduct } from "../services/productService"
import { DraftProductSchema } from "../schemas"

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const intent = formData.get("intent")

  if (intent === "new") {
    const productData = Object.fromEntries(formData)
    const result = DraftProductSchema.safeParse(productData)

    if (!result.success) {
      return result.error.format()
    }

    // wait until Add product succeed
    await addProduct(result.data)

    return redirect("/")
  }

  if (intent === "edit") {
    // Edit action
  }

  throw json(
    { message: "Invalid Intent" },
    { status: 400 }
  )
}