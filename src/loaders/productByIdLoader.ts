import { LoaderFunctionArgs } from "react-router-dom";
import { getProductById } from "../services/productService";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id)
  if (isNaN(id) || id === 0) {
    throw new Error("Invalid product id")
  }
  const product = await getProductById(id)
  if (!product) {
    throw new Response("Not Found", { status: 404, statusText: "Not Found" })
  }
  return product
}