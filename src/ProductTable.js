import React from 'react'

function ProductCategoryRow(props) {
    return (<tr>
        <td colSpan="2" className="category" style={{ fontWeight: "bold" }}>{props.name}</td>
    </tr>)
}
function ProductRow(props) {
    const name = props.stocked ? props.name : <span style={{ color: 'red' }}>{props.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{props.price}</td>
        </tr>)
}
export default class ProductTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const rows = []
        let lastCategory = null
        this.props.products.forEach(product => {
            if (product.name.indexOf(this.props.filterText) === -1) {
                return;
              }
              if (this.props.onlyShowProductsInStock && !product.stocked) {
                return;
              }
            if (product.category != lastCategory) {
                rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
            }
            rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />)
            lastCategory = product.category
        })
        return (
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
        )
    }
}