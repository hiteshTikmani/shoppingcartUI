import React from 'react';
import './App.css';

const CartTotal = (props) => {
    var subtotal = 0;
    for (var i of props.data) {
        subtotal += (i.qty * i.price);
    }
    var promoValue = 5.90;
    var total = subtotal - promoValue;
    return (
        <div className="cart-total">
            <div className='cart-total-left'>
                <span>Need help or have questions?</span>
                <span>Call Customer Service at</span>
                <span>1-800-555-555</span>
                <span>Chat with one of our stylist</span>
                <span>See Return or exchange policy</span>
            </div>
            <div className="cart-total-right">
                <div className="promocode">
                    <div >ENTER PROMOTION CODE OR GIFT CARD</div>
                    <div className='code' ><input type="text" style={{ padding: '15px' }} id="a" value="AJ10" />
                        <div className="apply_btn">APPLY</div>
                    </div>
                </div>
                <div className="billing">
                    <div className = 'bill_part'>
                        <span>SUB TOTAL</span>
                        <span>${subtotal}</span>
                    </div>
                    <div className = 'bill_part'>
                        <span>PROMOTION CODE AJ10 APPLIED</span>
                        <span>$5.90</span>
                    </div>
                    <div className = 'bill_part'>
                        <span>ESTIMATED SHIPPING*</span>
                        <span>FREE</span>
                    </div>
                    <div className = 'bill_part'>
                        <span>ESTIMATED TOTAL</span>
                        <span>${total}</span>
                    </div>
                    <div className="Checkout_btn">
                        <span>Continue Shopping</span>
                        <span>Checkout</span>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
