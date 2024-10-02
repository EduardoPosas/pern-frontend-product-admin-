import { useNavigate, useFetcher } from "react-router-dom"
import type { ProductType } from "../types"
import { formatPrice } from "../utils"

type ProductDetailsType = {
  product: ProductType
}

function ProductDetails({ product }: ProductDetailsType) {
  const { id, name, price, available } = product
  const navigate = useNavigate()
  const isAvailable = available ? "Disponible" : "No Disponible"
  const fetcher = useFetcher()

  return (
    <>
      <tr className="border-b border-slate-200 hover:bg-slate-100">
        <td className="py-4 px-2 text-left">{name}</td>
        <td className="py-4 px-2 text-right">{formatPrice(price)}</td>
        <td className="py-4 px-2 text-center">
          <fetcher.Form
            method="POST"
          >
            <button
              type="submit"
              name="intent"
              value="availability"
              className={`${available ? " bg-green-500" : "bg-yellow-500 "} px-2 py-1 rounded-full text-xs text-white`}
            >
              {isAvailable}
            </button>
            <input type="hidden" name="id" value={id} />
          </fetcher.Form>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => navigate(`/producto/${id}/editar`)}
              className="bg-indigo-600 text-white text-center text-xs w-full px-4 py-2 font-bold hover:bg-indigo-800 transition-colors rounded"
            >Editar</button>
            <fetcher.Form
              className="w-full"
              method="POST"
              action={`/producto/${id}/eliminar`}
              // navigate={false}
              onSubmit={(e) => {
                const confirmDelete = confirm("¿Deseas eliminar el producto?")
                if (!confirmDelete) e.preventDefault()
              }}
            >
              <button
                type="submit"
                className="bg-red-600 text-white text-center text-xs font-bold w-full px-4 py-2 rounded hover:bg-red-800 transition-colors"
                name="intent"
                value="delete"
              >
                Eliminar
              </button>
            </fetcher.Form>
          </div>
        </td>
      </tr>
    </>
  )
}

export default ProductDetails