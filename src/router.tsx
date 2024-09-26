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
import EditProductPage from "./views/EditProductPage"

/**
 * Actions
 */
import { action as productAction } from "./actions/productAction"

/**
 * Loaders
 */
import { loader as productLoader } from "./loaders/productLoader"
import { loader as productByIdLoader } from "./loaders/productByIdLoader"

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
      },
      {
        path: "producto/:id/editar",
        element: <EditProductPage />,
        loader: productByIdLoader,
        action: productAction
      }
    ]
  }
])

export default router