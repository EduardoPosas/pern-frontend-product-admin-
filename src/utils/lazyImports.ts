import { lazy } from "react"

export const ProductPage = lazy(() => import("../views/ProductPage"))
export const NewProductPage = lazy(() => import("../views/NewProductPage"))
export const EditProductPage = lazy(() => import("../views/EditProductPage"))