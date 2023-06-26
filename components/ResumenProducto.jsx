import Image from "next/image"
import { formatearDinero } from "../helpers"

const ResumenProducto = ({ producto }) => {

    const { nombre, precio, cantidad, id, imagen } = producto

    return (
        <div className="shadow p-5 mb-3 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen producto ${nombre}`}
                    src={`/assets/img/${imagen}.jpg`}
                />
            </div>
            <div className="md:w-5/6">
                <p className="text-3xl font-bold">{nombre}</p>
                <p className="text-xl font-bold mt-2">Cantidad: {cantidad}</p>
                <p className="text-xl font-bold mt-2 text-amber-500">Precio: {formatearDinero(precio)}</p>
                <p className="text-sm text-gray-700 mt-2 font-bold">Subtotal: {formatearDinero(precio * cantidad)}</p>
            </div>
        </div>
    )
}

export default ResumenProducto