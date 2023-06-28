import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';
import { formatearDinero } from '../helpers';

const Orden = ({ orden }) => {
	const { nombre, pedido, total, fecha, id } = orden;

	const completarOrden = async () => {
		try {
			await axios.post(`/api/ordenes/${id}`);
            toast.success("Orden Completada")
        } catch (error) {
			toast.error("Orden no Completada")
		}
	};

	return (
		<div className="border p-10 space-y-5">
			<h3 className="text-2xl font-bold">Orden: {id}</h3>
			<p className="text-lg font-bold">Cliente: {nombre}</p>

			<div>
				{pedido.map((plato) => (
					<div key={plato.id} className="py-3 flex border-b last-of-type:border-0 items-center">
						<div className="w-32">
							<Image
								width={400}
								height={500}
								alt={`Imagen producto ${plato.nombre}`}
								src={`/assets/img/${plato.imagen}.jpg`}
							/>
						</div>
						<div className="p-5 space-y-2">
							<h4 className="text-xl font-bold text-amber-500">{plato.nombre}</h4>
							<p className="text-lg font-bold">Cantidad: {plato.cantidad}</p>
						</div>
					</div>
				))}
			</div>
			<div className="md:flex md:items-center md:justify-between my-10">
				<p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p>

				<button
					className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 uppercase font-bold py-3 px-10 transition-all rounded-lg"
					type="button"
					onClick={completarOrden}
				>
					Completar Orden
				</button>
			</div>
		</div>
	);
};

export default Orden;
