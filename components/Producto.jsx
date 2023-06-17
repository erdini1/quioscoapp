import Image from "next/image"
import { formatearDinero } from "../helpers"

const Producto = ({ producto }) => {

    const { id, nombre, imagen, precio } = producto

    return (
        <div className="border p-3">
            <Image
                width={400}
                height={500}
                src={`/assets/img/${imagen}.jpg`}
                alt="Imagen Producto"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-orange-500 text-4xl">{formatearDinero(precio)}</p>
            </div>
        </div>
    )
}

export default Producto