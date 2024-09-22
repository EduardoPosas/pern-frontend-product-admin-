import { Link } from "react-router-dom"

function NewProductPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-slate-500 font-bold text-2xl">Nuevo Producto</h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded font-bold hover:bg-indigo-700 transition-colors"
        >
          Volver a Productos
        </Link>
      </div>
    </>
  )
}

export default NewProductPage