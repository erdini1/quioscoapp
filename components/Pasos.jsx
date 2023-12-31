import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco"

const pasos = [
    { paso: 1, nombre: "Menú", url: "/" },
    { paso: 2, nombre: "Resumen", url: "/resumen" },
    { paso: 3, nombre: "Datos y Total", url: "/total" }
]

const Pasos = () => {

    const router = useRouter()
    const { handleChangePaso } = useQuiosco()

    const calcularProgreso = () => {
        let valor
        if (router.pathname === "/") {
            valor = 2
        } else if (router.pathname === "/resumen") {
            valor = 50
        } else {
            valor = 100
        }
        return valor
    }

    return (
        <>
            <div className="flex justify-between mb-5">
                {pasos.map(paso => (
                    <button
                        key={paso.paso}
                        type=""
                        onClick={() => {
                            router.push(paso.url)
                        }}
                        className="text-2xl font-bold"
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>

            {/* esta va a ser la barra de fondo que se tiene que llena */}
            <div className="bg-gray-100 mb-10">
                {/* esta va a ser la barra que se va a ir a llenando */}
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{ width: `${calcularProgreso()}%` }} >
                </div>
            </div>

        </>
    )
}

export default Pasos