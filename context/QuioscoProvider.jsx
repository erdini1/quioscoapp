import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
	const [ categorias, setCategorias ] = useState([]);
	const [ categoriaActual, setCategoriaActual ] = useState({});
	const [ producto, setProducto ] = useState({});
	const [ modal, setModal ] = useState(false);
	const [ pedido, setPedido ] = useState([]);
	const [ nombre, setNombre ] = useState('');

	const router = useRouter();

	const obtenerCategorias = async () => {
		const { data } = await axios('/api/categorias');
		setCategorias(data);
	};
	// El siguiente UseEffect me trae las categorias de la api
	useEffect(() => {
		obtenerCategorias();
	}, []);

	// El siguiente UseEffect resalta la primer categoria
	useEffect(
		() => {
			setCategoriaActual(categorias[0]);
		},
		[ categorias ]
	);

	const handleClickCategoria = (id) => {
		// filtra las categorias y me muestra la que coincide con el id indicado
		const categoria = categorias.filter((c) => c.id === id);
		setCategoriaActual(categoria[0]);
		router.push('/');
	};

	const handleSetProducto = (producto) => {
		setProducto(producto);
	};

	const handleChangeModal = () => {
		setModal(!modal);
	};

	const handleAgregarPedido = ({ categoriaId, ...producto }) => {
		if (pedido.some((productoState) => productoState.id === producto.id)) {
			//Actualizar la cantidad
			const pedidoActualizado = pedido.map(
				(productoState) => (productoState.id === producto.id ? producto : productoState)
			);
			setPedido(pedidoActualizado);
			toast.success('Guardado correctamente');
		} else {
			setPedido([ ...pedido, producto ]);
			toast.success('Agregado al pedido');
		}

		setModal(false);
	};

	const handleEditarCantidades = (id) => {
		const productoActualizar = pedido.filter((producto) => producto.id === id);
		setProducto(productoActualizar[0]);
		setModal(!modal);
	};

	const handleEliminarProducto = (id) => {
		const productoActualizar = pedido.filter((producto) => producto.id !== id);
		setPedido(productoActualizar);
		toast.success('Producto eliminado del pedido');
	};

	return (
		<QuioscoContext.Provider
			value={{
				categorias,
				handleClickCategoria,
				categoriaActual,
				producto,
				handleSetProducto,
				handleChangeModal,
				modal,
				handleAgregarPedido,
				pedido,
				handleEditarCantidades,
				handleEliminarProducto,
				nombre,
				setNombre
			}}
		>
			{children}
		</QuioscoContext.Provider>
	);
};

export { QuioscoProvider };

export default QuioscoContext;
