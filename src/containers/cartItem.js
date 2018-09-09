import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import { onEditClick, onRemoveClick } from '../actions/index';
import {bindActionCreators} from 'redux';

class CartItem extends Component {

    render() {

        return (
            <tr className='productRow'>
                <td >
                    <div className="product">
                        <div className="imgclass"><img src={this.props.data.imageURL} alt='' /></div>
                        <div className="details">
                            <h2>{this.props.data.name}</h2>
                            Style #:{this.props.data.style}<br />
                            Color : {this.props.data.color}<br />
                            <a onClick={() => this.props.onEditClick(this.props.data)}>Edit</a>
                            <a onClick={()=>this.props.onRemoveClick(this.props.data.name)}> X REMOVE </a>
                            <a> SAVE FOR LATER </a>
                        </div>
                    </div>
                </td>
                <td ><h4>{this.props.data.size}</h4></td>
                <td ><h4><input type="text" id="a" value={this.props.data.qty} /></h4></td>
                <td ><h2>${this.props.data.price}.00</h2></td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({onEditClick:onEditClick, onRemoveClick:onRemoveClick}, dispatch)
}

function mapStateToProps(state) {
    return { products: state.remove }
}

export default connect (mapStateToProps,mapDispatchToProps) (CartItem);
