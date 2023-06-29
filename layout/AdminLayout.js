import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {

  const router = useRouter()

  const handleClickOrden = estado => {
    if (estado === 0) {
      router.push("/admin")
    } else {
      router.push("/admin/completas")
    }
  }

  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">

          {/* TODO: Agregar un link hacia la pagina principal desde el logo - COMPLETADO*/}
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
            onClick={() => router.push("/")}
            className="hover:cursor-pointer"
          />

          {/* TODO: Agregar un nav con las ordenes completas e incompletas. Tambien agregar las funcionalidades que correspondan - COMPLETADO*/}
          {/* TODO: Resaltar pagina de ordenes completadas o incompletas - COMPLETADO*/}

          <nav className="mt-10">
            <button
              type="button"
              className={`${router.pathname === "/admin" ? "bg-amber-400" : ""} p-5 text-2xl font-bold hover:cursor-pointer border hover:bg-amber-400 transition-all w-full }`}
              onClick={() => handleClickOrden(0)}
            >
              Ordenes a Completar
            </button>
            <button
              type="button"
              className={`${router.pathname === "/admin/completas" ? "bg-amber-400" : ""} p-5 w-full text-2xl font-bold hover:cursor-pointer border hover:bg-amber-400 transition-all }`}
              onClick={() => handleClickOrden(1)}
            >
              Ordenes Finalizadas
            </button>
          </nav>

        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}