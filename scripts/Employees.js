import { getEmployees, getOrders } from "./database.js"

const listEmployees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            const currentEmployee = listEmployees.find( (person) => parseInt(employeeId) === person.id)
            let productNumber = 0
            for (const order of orders) {
                if (order.employeeId === currentEmployee.id) {
                    productNumber ++
                }
            }
                      
           window.alert(`${currentEmployee.name} has sold ${productNumber} products`)
                }
            }
)

export const employees = () => {
    let html = "<ul>"

    for (const employee of listEmployees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}