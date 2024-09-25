import axios from "axios"
import type { DraftProductType } from "../types"
import { ProductsSchema } from "../schemas"

export async function addProduct(productData: DraftProductType) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/products`
    await axios.post(url, productData)
  } catch (error) {
    console.log(error)
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/products`
    const { data } = await axios.get(url)
    const result = ProductsSchema.safeParse(data.data)
    if(!result.success) {
      throw new Error("Invalide type response")
    }
    return result.data
  } catch (error) {
    console.log(error)
  }
}