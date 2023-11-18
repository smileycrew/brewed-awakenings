import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener("click", (clickedEvent) => {
    if (clickedEvent.target.dataset.type === "product") {
        const itemClicked = clickedEvent.target
        let alertMessage = ""
        let productId = parseInt(itemClicked.dataset.productid)
        for (const product of products) {
            if (product.id === productId) {
                alertMessage = `
                ${product.name} costs
                    $${product.price}
                `
            }
        }
        window.alert(alertMessage)
    }
})

export const Products = () => {
    let html = "<ul>"
    for (const product of products) {
        html += `
        <li
            data-productId="${product.id}" data-type="product">${product.name}
        </li>
        `
    }

    html += "</ul>"

    return html
}

