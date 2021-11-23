import { getProducts } from "./database.js"

const listProducts = getProducts()

export const products = () => {
    let html = "<ul>"

    for (const product of listProducts) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

