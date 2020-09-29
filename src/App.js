//feature 1
import React from 'react';
import Filter from './components/filter';
import Products from './components/Products';
import data from './data.json';
 

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    };
  }
  sortProducts = (event) =>{
    //impl
    const sort = event.target.value; //current sort
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "lowest" ?
        (a.price > b.price ? 1:-1) :
        sort === "highest" ? 
        (a.price < b.price ? 1:-1) :
        (a._id < b._id) ? 1 :-1 )
      ), //filtered products
    }));
  }
  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({ color: event.target.value, products: data.products });
    } else{
      this.setState({
      color: event.target.value,
      products: data.products.filter( 
        (product) => product.color.indexOf(event.target.value) >= 0)
      
    });
    };
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href='/'> Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main"> 
            <Filter count={this.state.products.length}
            size={this.state.color}
            sort={this.state.sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            ></Filter>
            <Products products={this.state.products}></Products>
            </div>
            <div className='sidebar'>Cart Items</div>
          </div>
        </main>
        <footer>  All rights reserved.</footer>
      </div>
    );
  }
}


export default App;
