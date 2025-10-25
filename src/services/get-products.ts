interface Product {
    imagen: string;
    href: string;
    titulo: string;
    precio: number;
    desc: string;
}

export async function getProducts(): Promise<Product[]> {

    try {
        const res = await fetch('/public/products.json');

        if (!res.ok){
            throw new Error(`Error de fetch. Status: ${res.status}`)
        }

        const data: Product[] = await res.json()
        console.log(data)
        return data;
    } catch (error){
        console.error(`Error buscando los productos: ${error}`)
        return []
    }
}