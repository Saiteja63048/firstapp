import react from 'react';

class Product extends react.Component{
    constructor(){
         super();
         this.state = {
          "pname":"santoor",
          "price":100,
          "seller": "abc store"

         }
    }
    updatePrice(){
        this.setState({"price":150});
    }


    render(){
        return(

            <div>
                <h1> this is product.js</h1>

                <h1> {this.state.pname} {this.state.price} {this.state.seller}</h1>

                <button onClick={this.updatePrice}>update price </button>                 
                 </div>

        )
        
    }
}


export default Product;



