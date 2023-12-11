/* eslint-disable react/prop-types */
export default function Searchbar({ sarchText, inStockOnly, onChangeSearchText, onChangeInStockOnly }) {
    return (
        <form>
            <input type="text" placeholder="search.." value={sarchText} onChange={(e) => onChangeSearchText(e.target.value)} />
            <br />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onChangeInStockOnly(e.target.checked)} />
                Show in stock products only
            </label>
        </form>
    )
}