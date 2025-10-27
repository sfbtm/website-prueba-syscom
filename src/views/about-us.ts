import "../styles/about-us.css"

export const aboutUs = () => {

    // crear elementos
    const main = document.createElement("main");

    const titulo = document.createElement("h1");
    const img = document.createElement("img");
    const desc = document.createElement("p");

    // atributos de elementos
    titulo.textContent = "Sobre Nosotros";
    img.src = "/about-us.png"

    desc.textContent = "Detrás de MiTienda hay un equipo de profesionales dedicados, unidos por la visión de [Misión simple, ej: ofrecer el mejor servicio de su clase]. Creemos en la colaboración y ponemos al cliente en el centro de cada decisión."

    // asignar clases
    main.classList.add("main__about-us")
    titulo.classList.add("about-us__titulo")
    img.classList.add("about-us__img")
    desc.classList.add("about-us__desc")

    // emparentar elementos
    main.append(titulo,img,desc)

    return main
}