import "./header.css"


// TODO: Poner los links en los <a>

export const crearHeader = () => {

    // crear elementos
    const header = document.createElement("header");
    const logo = document.createElement("img");
    const titulo = document.createElement("h3");

    const aboutUs = document.createElement("a");
    const cart = document.createElement("a");
    const profile = document.createElement("a");

    const logoContainer = document.createElement("div")
    const linksContainer = document.createElement("div")
    
    // añadir texto al nodo titulo
    titulo.textContent = "MiTienda";
    aboutUs.textContent = "About Us"
    cart.textContent = "Carrito";
    profile.textContent = "Perfil"
    
    // src del img del logo

    logo.src ="/src/assets/logo.png"

    // asignar clases
    header.classList.add("header");
    logo.classList.add("header__logo");
    titulo.classList.add("header__titulo")

    aboutUs.classList.add("header__links");
    cart.classList.add("header__links");
    profile.classList.add("header__links")

    logoContainer.classList.add("header__logo-container");
    linksContainer.classList.add("header__links-container");

    // emparentar objetos
    logoContainer.append(logo,titulo);
    linksContainer.append(aboutUs,cart,profile)

    header.append(logoContainer,linksContainer)
    
    return header
}

