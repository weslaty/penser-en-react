import React from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChangesearchText = (e) =>{
        this.props.onSearchTextChange(e.target.value)
    }

    handleChangeonOnlyShowProductsInStockChange = (e) =>{
        this.props.onOnlyShowProductsInStockChange(e.target.checked)
    }

    render() {
        return (
            <div>
                <div>
                    <input name="searchText" placeholder="Search..." value={this.props.searchText} onChange={this.handleChangesearchText} />
                </div>
                <div>
                    <input name="onlyShowProductsInStock"
                        value={this.props.onlyShowProductsInStock}
                        type="checkbox"
                        checked={this.props.onlyShowProductsInStock}
                        onChange={this.handleChangeonOnlyShowProductsInStockChange} />
                    <label htmlFor="onlyShowProductsInStock">
                        Only show products in stock
                    </label>
                </div>
            </div>
        )
    }
}