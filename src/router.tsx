import { createBrowserRouter } from "react-router-dom"
import { Suspense } from "react"

/**
 * Layouts
 */
import RootLayout from "./layouts/RootLayout"

/** 
 * Lazy Pages
*/
import { ProductPage, NewProductPage, EditProductPage } from "./utils/lazyImports"
// import ProductPage from "./views/ProductPage"
// import NewProductPage from "./views/NewProductPage"
// import EditProductPage from "./views/EditProductPage"

/**
 * Actions
 */
import { action as productAction } from "./actions/productAction"

/**
 * Loaders
 */
import { loader as productLoader } from "./loaders/productLoader"
import { loader as productByIdLoader } from "./loaders/productByIdLoader"

/**
 * Error elements
 */
import ErrorBoundary from "./components/ErrorBoundary"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback="Cargando ...">
          <ProductPage />
        </Suspense>,
        loader: productLoader,
        action: productAction,
        errorElement: <ErrorBoundary />
      },
      {
        path: "producto/crear",
        element: <Suspense fallback="Cargando ...">
          <NewProductPage />
        </Suspense>,
        action: productAction
      },
      {
        path: "producto/:id/editar",
        element: <Suspense fallback="Cargando ...">
          <EditProductPage />
        </Suspense>,
        loader: productByIdLoader,
        action: productAction
      },
      {
        path: "producto/:id/eliminar",
        action: productAction
      }
    ]
  }
])

export default router