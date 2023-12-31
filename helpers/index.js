export const formatearDinero = cantidad => {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}

export const formatearFecha = fecha => {
    const opciones = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric",
    }
    /* const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'

    } */
    return new Date(fecha).toLocaleDateString('es-ES', opciones)
}