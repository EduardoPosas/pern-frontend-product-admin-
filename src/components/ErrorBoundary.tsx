import { useRouteError, isRouteErrorResponse } from "react-router-dom"

function ErrorBoundary() {
  const error = useRouteError()

  if (!isRouteErrorResponse(error)) {
    return <p>Ocurrió un error en la petición a los productos</p>
  }

  return (
    <>
      <p >Status: <span className="font-bold">{error.status}</span></p>
      <p className="text-4xl text-red-500 font-bold text-center mt-4">{error.data}</p>
    </>
  )
}

export default ErrorBoundary