import { Link, Form, useActionData } from "react-router-dom"
import { ZodErrorType } from "../types"
import Error from "../components/Error"

function NewProductPage() {

  const errors = useActionData() as ZodErrorType

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <h2 className="text-slate-500 font-bold text-2xl">Nuevo Producto</h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded font-bold hover:bg-indigo-800 transition-colors"
        >
          Volver a Productos
        </Link>
      </div>
      <section className="mt-10">
        <Form
          className="flex flex-col gap-4"
          method="POST"
        >
          <div className="grid gap-2">
            <label className="text-slate-800" htmlFor="name">Nombre Producto:</label>
            <input className="bg-slate-100 text-slate-800 p-2 rounded" type="text" id="name" name="name" placeholder="Ex. Monitor Curvo 27 ..." autoComplete="off" />
            {errors?.name && errors.name._errors.map(error => <Error key={error}>{error}</Error>)}
          </div>
          <div className="grid gap-2">
            <label className="text-slate-800" htmlFor="price">Precio:</label>
            <input className="bg-slate-100 text-slate-800 p-2 rounded" type="number" step="0.01" id="price" name="price" placeholder="Ex. 10.0" />
            {errors?.price && errors.price._errors.map(error => <Error>{error}</Error>)}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              name="intent"
              value="new"
              className="bg-slate-600 text-white text-sm px-4 py-2 rounded font-bold hover:bg-slate-800 transition-colors">
              Registrar Producto
            </button>
          </div>
        </Form>
      </section>
    </>
  )
}

export default NewProductPage