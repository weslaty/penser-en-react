import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            onlyShowProductsInStock: false
        };
    }

    handleChangeSearchText = (searchText) => {
        this.setState({
            searchText
        });
    }

    handleChangeOnlyShowProductsInStockChange = (onlyShowProductsInStockChange) => {
        this.setState({
            onlyShowProductsInStock: onlyShowProductsInStockChange
        });
    }
    render() {
        return (
            <div>
                <SearchBar searchText={this.state.searchText}
                    onlyShowProductsInStock={this.state.onlyShowProductsInStock}
                    onSearchTextChange={this.handleChangeSearchText}
                    onOnlyShowProductsInStockChange={this.handleChangeOnlyShowProductsInStockChange} />
                <ProductTable test="TEST" products={this.props.products} filterText={this.state.searchText} onlyShowProductsInStock={this.state.onlyShowProductsInStock} />
            </div>
        )
    }
}