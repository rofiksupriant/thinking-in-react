import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

/* eslint-disable react/prop-types */
export default function ProduckTable({ products, searchText, inStockOnly }) {
    let rows = []
    let lastCategory = null

    products.forEach((product) => {
        let name = product.name
        if (name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return
        }

        if (inStockOnly && !product.stocked) {
            return
        }

        if (product.category != lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
        }

        rows.push(<ProductRow key={name} product={product} />)

        lastCategory = product.category
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}