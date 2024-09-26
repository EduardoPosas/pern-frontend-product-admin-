import { useNavigate } from "react-router-dom"
import type { ProductType } from "../types"
import { formatPrice } from "../utils"

type ProductDetailsType = {
  product: ProductType
}

function ProductDetails({ product }: ProductDetailsType) {
  const { id, name, price, available } = product
  const navigate = useNavigate()
  const isAvailable = available ? "Disponible" : "No Disponible"

  return (
    <>
      <tr className="border-b border-slate-200 hover:bg-slate-100">
        <td className="py-4 px-2 text-left">{name}</td>
        <td className="py-4 px-2 text-right">{formatPrice(price)}</td>
        <td className="py-4 px-2 text-center">{isAvailable}</td>
        <td>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => navigate(`/producto/${id}/editar`)}
              className="bg-indigo-600 text-white text-center text-xs w-full px-4 py-2 font-bold hover:bg-indigo-800 transition-colors rounded"
            >Editar</button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default ProductDetails