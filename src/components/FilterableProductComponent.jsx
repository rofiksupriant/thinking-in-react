/* eslint-disable react/prop-types */
import { useState } from "react"
import Searchbar from "./SearchBar"
import ProduckTable from "./ProductTable"

export default function FilterableProductTable({ products }) {
    const [searchText, setSearchText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <>
            <Searchbar
                searchText={searchText}
                inStockOnly={inStockOnly}
                onChangeSearchText={setSearchText}
                onChangeInStockOnly={setInStockOnly} />
            <ProduckTable products={products} searchText={searchText} inStockOnly={inStockOnly} />
        </>
    )
}