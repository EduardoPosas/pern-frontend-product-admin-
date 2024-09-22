import { Link } from "react-router-dom"

function ProductPage() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <h2 className="text-slate-500 font-bold text-2xl">Productos</h2>
      <Link
        to="/producto/crear"
        className="bg-indigo-600 text-white text-sm px-4 py-2 rounded font-bold hover:bg-indigo-700 transition-colors"
      >
        Agregar Producto
      </Link>
    </div>
  )
}

export default ProductPage