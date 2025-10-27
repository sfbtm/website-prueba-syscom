import { getIcon } from "../services/get-icon";

import "../styles/profile.css";

export const profile = () => {
    const main = document.createElement("main");
    
    const profileContainer = document.createElement("div");
    const img = document.createElement("img");
    const nombre = document.createElement("h3");

    nombre.textContent = "Tu Cuenta";
    img.src = "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80";

    const opcionesContainer = document.createElement("div");

    const opciones = [
        {icono: "bag-shopping", texto: "Mis ordenes"},
        {icono: "user", texto: "Mi informacion"},
        {icono: "location-dot", texto: "Mis direcciones"},
        {icono: "lock", texto: "Seguridad"},
    ];

    opciones.forEach(opcion => {
        const icono = getIcon(opcion.icono);
        const opcionElemento = document.createElement("p");

        //Asignar clase a cada opcion
        opcionElemento.classList.add("profile__opciones-container__opciones")

        opcionElemento.append(icono,opcion.texto)
        opcionesContainer.append(opcionElemento)
    })

    //emparentar elementos
    profileContainer.append(img,nombre);
    main.append(profileContainer,opcionesContainer);

    // asignar clases
    main.classList.add("main__profile");

    profileContainer.classList.add("profile__container");
    img.classList.add("profile__container__img");
    nombre.classList.add("profile__container__nombre");

    opcionesContainer.classList.add("profile__opciones-container")

    return main

}