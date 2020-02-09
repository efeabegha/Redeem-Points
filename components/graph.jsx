import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bars } from './bars';

class _Graph extends Component {
    constructor() {
        super();
        this.state = {
            points: [ 12, 14, 28, 16, 18, 20, 3, 11 ],
            brands: ['Rewe', 'Penny', 'Aldi', 'Edeka', 'Spar', 'Lidl', 'Lestra', 'Netto'],
            
        }
        this.updatePoints = this.updatePoints.bind(this);
    }

    updatePoints(topUpPoints, brand) {
        const {points, brands} = this.state;
        const newPoints = points.slice();
        brands.forEach((b, i) => {
            if (b === brand){
                newPoints[i] = topUpPoints;
            }
        });
        return newPoints;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const newPoints = prevState.points.slice();
        prevState.brands.forEach((b, i) => {
            if (b === nextProps.brand){
                newPoints[i] = nextProps.points;
            }
        });
        // do things with nextProps.someProp and prevState.cachedSomeProp
        //const newPoints = this.updatePoints(nextProps.points, nextProps.brand);
        return {
            points: newPoints
        };
    }
 
    render() {
        return <Bars points={this.state.points} brands={this.state.brands} />;
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        points: state.points,
        brand: state.brand
    }
};

const Graph = connect(mapStateToProps)(_Graph);

export {
    Graph
};