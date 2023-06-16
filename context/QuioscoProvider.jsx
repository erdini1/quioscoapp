import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    const obtenerCategorias = async () => {
        const { data } = await axios("/api/categorias")
        setCategorias(data)
    }
    // El siguiente UseEffect me trae las categorias de la api
    useEffect(() => {
        obtenerCategorias()
    }, [])

    // El siguiente UseEffect resalta la primer categoria
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        // filtra las categorias y me muestra la que coincide con el id indicado
        const categoria = categorias.filter(c => c.id === id)
        setCategoriaActual(categoria[0])
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext