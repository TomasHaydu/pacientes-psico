import { Outlet, Link, useLocation} from "react-router-dom"
import styled from "@emotion/styled"


const layout = () => {

  const location = useLocation()
  const urlNow = location.pathname

  return (
    <div
    className="flex bg-orange-100"
    >
      <div className="bg-orange-400 w-36 h-screen inline-block border-r-2 rounded-r-3xl p-4">
        <div className="text-center ">
          <h1
          className="font-bold mt-8 text-2xl"
          >Pacientes</h1>
          <p
          className="mt-1 text-sm"
          >Lic. Paula Tramaglia</p>
        </div>

        <div
        className="mt-8 text-base flex text-justify"
        >
          <nav>
            <div
            className={`${urlNow === '/' ? ' bg-orange-300 flex justify-start hover:underline rounded-sm': 'flex justify-start bg-orange-400 hover:underline rounded-sm'}`}
            >
            <Link
            className="ml-2"
            to="/"
            >Pacientes</Link>
            </div>

            <div
            className={`${urlNow === '/new' ? ' mt-1 bg-orange-300 flex justify-center hover:underline rounded-sm': 'mt-1 flex justify-center bg-orange-400 hover:underline'}`}
            >
            <Link
            className="ml-2"
            to="new"
            >Nuevo Paciente</Link>
            </div>
          </nav>
        </div>
      </div>

              
      <div 
      className="bg-orange-50 w-full mx-8 my-8 rounded-lg"
      >
        <Outlet />
        </div>

    </div>
  )
}

export default layout