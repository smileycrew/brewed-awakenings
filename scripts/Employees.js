import { getEmployees, getProducts, getOrders } from "./database.js"

const employees = getEmployees()
const products = getProducts()
const orders = getOrders()

document.addEventListener("click", (clickedEvent) => {
    if (clickedEvent.target.dataset.type === "employee") {
        const itemClicked = clickedEvent.target
        const employee = itemClicked.innerText
        const employeeId = parseInt(itemClicked.dataset.employeeid)
        let counter = 0
        for (const order of orders) {
            if (order.employeeId === employeeId)
            counter++
        }
        window.alert(`${employee} sold ${counter} products.`)
    }
})

export const Employees = () => {
    let html = "<ul>"
    for (const employee of employees) {
        html += `
        <li data-employeeId="${employee.id}" data-type="employee">
            ${employee.name}
        </li>`
    }

    html += "</ul>"

    return html
}

