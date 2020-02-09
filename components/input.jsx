import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../js/actions/index';
import './input.scss';

const brands = [
    'Rewe', 'Penny', 'Aldi', 'Edeka', 'Spar', 'Lidl', 'Lestra', 'Netto'
];

class _Input extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (event) => {
        const {addPoints} = this.props;
        event.preventDefault();
        const points = parseInt(document.getElementById("points").value, 10)  || 0;
        const brand = document.getElementById("brand").value;
        addPoints({points, brand});
    }

    render() {
        return <div className="input-wrapper">
            <div className="input-select">
                <input type="number" id="points" className="input-points" placeholder="Enter points ..." />
                <select id="brand" className="brand-select">
                    {brands.map(brand => 
                        <option value={brand}>{brand}</option>
                    )}
                </select>
            </div>
            <button onClick={this.handleClick} className="input-button">Submit</button>
        </div>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPoints: pointsValue => dispatch(Actions.addPoints(pointsValue))
    }
};

const Input = connect(null, mapDispatchToProps)(_Input);

export {
    Input
};
