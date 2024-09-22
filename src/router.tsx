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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductPage />
      },
      {
        path: "producto/crear",
        element: <NewProductPage />
      }
    ]
  }
])

export default router