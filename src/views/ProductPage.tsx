import { Link, useLoaderData } from "react-router-dom"
import type { ProductType } from "../types"
import ProductDetails from "../components/ProductDetails"

function ProductPage() {
  const products = useLoaderData() as ProductType[]

  return (
    <>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h2 className="text-slate-500 font-bold text-2xl">Productos</h2>
        <Link
          to="/producto/crear"
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded font-bold hover:bg-indigo-800 transition-colors"
        >
          Agregar Producto
        </Link>
      </div>
      <section className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="py-4">Producto</th>
              <th className="py-4">Precio</th>
              <th className="py-4">Disponibilidad</th>
              <th className="py-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              products.length > 0
                ? (
                  products.map(product => (
                    <ProductDetails key={product.id} product={product} />
                  ))
                )
                : (
                  <tr>
                    <td colSpan={4} className="py-16 text-center text-xl text-indigo-600 font-bold">
                      Comienza agregando un nuevo producto
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </section>
    </>
  )
}

export default ProductPage