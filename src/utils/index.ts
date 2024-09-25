
export function formatPrice(stringPrice: string) {
  const price = Number(stringPrice)
  if (isNaN(price) || price === 0) {
    return 0
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price)
}