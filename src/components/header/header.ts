import "./header.css"
import logoWebsite from "../../assets/logo.png";

// TODO: Poner los links en los <a>

export const crearHeader = () => {

    // crear elementos
    const header = document.createElement("header");
    const logo = document.createElement("img");
    const titulo = document.createElement("a");

    const home = document.createElement("a")
    const aboutUs = document.createElement("a");
    const cart = document.createElement("a");
    const profile = document.createElement("a");

    const logoContainer = document.createElement("div")
    const linksContainer = document.createElement("div")
    
    // añadir texto al nodo titulo
    home.textContent = "Home";
    home.href = "/home"

    titulo.textContent = "MiTienda";
    titulo.href = "/home"

    aboutUs.textContent = "About Us"
    aboutUs.href = "/about-us"

    cart.textContent = "Carrito";
    cart.href = "/cart"

    profile.textContent = "Perfil"
    profile.href = "/profile"
    
    // src del img del logo

    logo.src = logoWebsite;

    // asignar clases
    header.classList.add("header");
    logo.classList.add("header__logo");
    titulo.classList.add("header__titulo")

    home.classList.add("header__links");
    aboutUs.classList.add("header__links");
    cart.classList.add("header__links");
    profile.classList.add("header__links")

    logoContainer.classList.add("header__logo-container");
    linksContainer.classList.add("header__links-container");

    // emparentar objetos
    logoContainer.append(logo,titulo);
    linksContainer.append(home,aboutUs,cart,profile)

    header.append(logoContainer,linksContainer)
    
    return header
}

