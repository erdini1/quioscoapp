import { useState } from 'react';
import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';
import { PlusIcon } from '../public/assets/icons/Plus';
import { MinusIcon } from '../public/assets/icons/Minus';
import { CloseIcon } from '../public/assets/icons/Close';

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido } = useQuiosco();
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <CloseIcon />
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(producto.precio)}</p>

        <div className='flex gap-4 mt-5'>
          <button
            type='button'
            onClick={() => {
              if (cantidad <= 1) return
              setCantidad(cantidad - 1)
            }}
          >
            <MinusIcon />
          </button>

          <p className='text-3xl'>{cantidad}</p>

          <button
            type='button'
            onClick={() => {
              if (cantidad >= 6) return
              setCantidad(cantidad + 1)
            }}
          >
            <PlusIcon />
          </button>
        </div>

        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 text-white mt-5 font-bold uppercase rounded'
          onClick={() => handleAgregarPedido({...producto, cantidad})}
        >
          Añadir al Pedido
        </button>

      </div>
    </div>
  );
};

export default ModalProducto;
