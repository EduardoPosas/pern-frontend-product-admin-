import { createBrowserRouter } from "react-router-dom"

/**
 * Layouts
 */
import RootLayout from "./layouts/RootLayout"

/** 
 * Pages
*/
import ProductPage from "./views/ProductPage"
import NewProductPage from "./views/NewProductPage"

/**
 * Actions
 */
import { action as productAction } from "./actions/productAction"

/**
 * Loaders
 */
import { loader as productLoader } from "./loaders/productLoader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
        loader: productLoader
      },
      {
        path: "producto/crear",
        element: <NewProductPage />,
        action: productAction
      }
    ]
  }
])

export default router