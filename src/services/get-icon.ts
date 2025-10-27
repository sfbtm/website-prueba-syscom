// funcion que trae iconos y los convierte en un elemento <i>

export const getIcon = (nombre: string) => {
    const icono = document.createElement("i");
    icono.classList.add("fa-solid",`fa-${nombre}`)
    return icono
}