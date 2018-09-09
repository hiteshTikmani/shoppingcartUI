import React, { Component } from 'react';
import '../App.css';
import CartItem from './cartItem';
import CartTotal from '../CartTotal';
import { connect } from 'react-redux';
import Popup from './popup';

class Cart extends Component {
    componentWillReceiveProps(nextprops){
        if (this.props.popup != nextprops.popup){
        this.setState({popup:true})
        console.log("ayayay");
        
        }
    }
    closePopup(){
        console.log("falllllllse ");
        
        this.setState({popup:false})
    }
    state={
        popup:false,
    }
    render() {
        const popup = this.props.popup;
        console.log("oooo",this.state.popup);
        const display = (popup) => {
            if (this.state.popup != false) {
                return (<Popup closePopup={this.closePopup.bind(this)}/>)
            }
        }
        const items = this.props.products.map((itemObj) => {
            return (<CartItem data={itemObj} />)
        }
        )
        return (
            <div className="Cart">
                <h1>YOUR SHOPPING CART</ h1>
                <span>If the cart is completely empty then we shall again add back the products for you</span>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ITEMS</th>
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="CartItem">{items}</tbody>
                </table>
                <div><CartTotal data={this.props.products} /></div>
                {display(popup)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { products: state.remove, popup: state.popup }
}

export default connect(mapStateToProps)(Cart);
