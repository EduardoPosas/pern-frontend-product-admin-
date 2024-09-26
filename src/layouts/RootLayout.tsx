import { Outlet } from "react-router-dom"

import Header from "../components/Header"

function RootLayout() {
  return (
    <>
      <Header />
      <main className="w-[95%] max-w-4xl mx-auto px-5 py-10 my-10 shadow rounded">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout