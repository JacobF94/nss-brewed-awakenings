import { getEmployees } from "./database.js"

const listEmployees = getEmployees()

export const employees = () => {
    let html = "<ul>"

    for (const employee of listEmployees) {
        html += `<li id="employee--${employee.Id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

