import { productos } from "../datos/productos"


export const PedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)

    })
}