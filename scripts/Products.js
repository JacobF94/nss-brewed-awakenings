import { getProducts } from "./database.js"

const listProducts = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productsId] = itemClicked.id.split("--")

            for (const product of listProducts) {
                if (product.id === parseInt(productsId)) {
                    window.alert(`${product.name} costs ${product.price} dollars`)
                }
            }
        }
    }
)

export const products = () => {
    let html = "<ul>"

    for (const product of listProducts) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}