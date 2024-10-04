import axios from "axios"
import type { DraftProductType, ProductType } from "../types"
import { ProductSchema, ProductsSchema } from "../schemas"

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
    if (!result.success) {
      throw new Error("Invalide type response")
    }
    return result.data
  } catch (error) {
    console.log(error)
    throw new Response(
      "Error al solicitar los productos",
      { status: 500 }
    )
  }
}

export async function getProductById(id: ProductType["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/products/${id}`
    const { data } = await axios.get(url)
    const result = ProductSchema.safeParse(data.data)
    if (!result.success) {
      throw new Error("Invalid type response")
    }
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function updateProduct(
  id: ProductType["id"],
  productData: DraftProductType
) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/products/${id}`
    await axios.put(url, productData)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteProduct(id: ProductType["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/products/${id}`
    await axios.delete(url)
  } catch (error) {
    console.log(error)
  }
}

export async function updateAvailability(id: ProductType["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/products/${id}`
    await axios.patch(url)
  } catch (error) {
    console.log(error)
  }
}