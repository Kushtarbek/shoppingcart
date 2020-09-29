import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                    <div className="filter-sort">Order {" "}
                        <select value={this.props.color} onChange={this.props.sortProducts}>
                            <option>Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                        <div className="filter-color">Filter {" "} 
                            <select value={this.props.color} onChange={this.props.filterProducts}>
                                <option value="any">Any</option>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="grey">Grey</option>
                                <option value="green">Silver</option>
                            
                            </select>
                        </div>
                
            </div>
        )
    }
}

