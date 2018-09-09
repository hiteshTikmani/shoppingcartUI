import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changed } from '../actions/index';

class Popup extends Component {
    state = {
        sizeValue: 'S',
        qtyValue: 1
    }

    handleChange = (e) => {
        this.setState({ sizeValue: e.target.value });
    }

    handleChangeQty = (e) => {
        this.setState({ qtyValue: e.target.value });
    }


    render() {
        if (!this.props.singleproduct) {
            return null;
        }
        return (
            <div className='PopupDesign'>
                <div className = 'Popup_content'>
                    <div style={{fontSize : '26px'}}>{this.props.singleproduct.name}</div>
                    <div style={{fontSize : '26px'}}>$ {this.props.singleproduct.price}.00</div>
                    <div>{this.props.singleproduct.style}</div>
                    <div className='inputGiven'>
                        <select name="SIZE" onChange={this.handleChange}>
                            <option value="S" selected>small</option>
                            <option value="M">medium</option>
                            <option value="L">large</option>
                        </select>
                        <input type="number" id="qty" name="qty"
                            placeholder="1"
                            min="2" max="4" onChange={this.handleChangeQty} />
                    </div>
                    <div className='Edit_btn'onClick={() => { this.props.changed(this.state, this.props.singleproduct.name); this.props.closePopup(); }}>Edit
                    </div>
                </div>
                <div>
                    <img src={this.props.singleproduct.imageURL} />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changed: changed }, dispatch)
}

function mapStateToProps(state) {
    return {
        singleproduct: state.popup
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
