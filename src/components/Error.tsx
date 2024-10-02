import { PropsWithChildren } from "react"

function Error({ children }: PropsWithChildren) {
  return (
    <p className="ps-2 text-xs text-red-600 font-light">{children}</p>
  )
}

export default Error