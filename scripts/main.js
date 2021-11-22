import { employees } from "./Employees.js"
import { orders } from "./Orders.js"
import { products } from "./Products.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${orders()}
</article>
`

mainContainer.innerHTML = applicationHTML

