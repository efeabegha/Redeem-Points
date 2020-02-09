import React, {Component} from 'react';
import { connect } from 'react-redux';
import './card.scss';

class _Card extends Component {
    constructor() {
        super();
        this.state = {
            points: 0,
            brand: "Rewe"
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // do things with nextProps.someProp and prevState.cachedSomeProp
        return {
            points: nextProps.points,
            brand: nextProps.brand
        };
    }

    render() {
        const {points, brand} = this.state;
        const card = points === 150 ?
            <div className="card-wins">
                <h3>Congratulations!</h3>
                <hr/>
                <p>You have qualified for points redemption from: </p>
                <h2>{brand}</h2> 
            </div> :
            <div className="cards">
                <h3>Points</h3>
                <p className="points-card-name">{points}</p>
                <hr/>
                <h2 className="brand-card-name">{brand}</h2>
            </div>;
        return <>{card}</>;
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        points: state.points,
        brand: state.brand
    }
};

const Card = connect(mapStateToProps)(_Card);

export {
    Card
};