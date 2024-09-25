import type { ProductType } from "../types"
import { formatPrice } from "../utils"

type ProductDetailsType = {
  product: ProductType
}

function ProductDetails({ product }: ProductDetailsType) {
  const { name, price, available } = product
  const isAvailable = available ? "Disponible" : "No Disponible"

  return (
    <>
      <tr className="border-b border-slate-200">
        <td className="py-4 px-2 text-left">{name}</td>
        <td className="py-4 px-2 text-right">{formatPrice(price)}</td>
        <td className="py-4 px-2 text-center">{isAvailable}</td>
      </tr>
    </>
  )
}

export default ProductDetails