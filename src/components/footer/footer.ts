import "./footer.css"

export const crearFooter = () => {

    // crear elementos
    const footerContainer = document.createElement("footer");

    const logoContainer = document.createElement("div");
    const logo = document.createElement("img");
    const nombre = document.createElement("h3");

    const propiedad = document.createElement("p");

    const linkList = document.createElement("ul");
    const aboutUs = document.createElement("li");
    const carrito = document.createElement("li");
    const perfil = document.createElement("li");

    // emparentar elementos
    logoContainer.append(logo,nombre);
    linkList.append(aboutUs,carrito,perfil);
    footerContainer.append(logoContainer,propiedad,linkList);

    // detalle de cada elemento
    //logo y nombre de logo
    logo.src = "/src/assets/logo.png";
    nombre.textContent = "MiTienda";

    //propiedad
    propiedad.textContent = "©6fbtm. Todos los derechos reservados";

    //links
    aboutUs.textContent = "About Us";
    carrito.textContent = "Carrito";
    perfil.textContent = "Perfil";

    // agregar clases
    footerContainer.classList.add("footer");
    logoContainer.classList.add("header__logo-container");
    logo.classList.add("header__logo") 
    nombre.classList.add("header__titulo") //se usa la misma regla del header para no re escribir regla

    propiedad.classList.add("footer__propiedad");

    linkList.classList.add("footer__link-list")
    aboutUs.classList.add("footer__link-list__link")
    carrito.classList.add("footer__link-list__link")
    perfil.classList.add("footer__link-list__link")

    return footerContainer
}