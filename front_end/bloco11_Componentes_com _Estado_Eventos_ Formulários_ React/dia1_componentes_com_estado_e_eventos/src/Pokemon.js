import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
        return (
            <div className='Card'>
                <h3 className='Name'>{name}</h3>
                <img className='Image' src={image} alt='' />
                <div className='Info'>
                    <p>{type}</p>
                    <p>Average weight: {value} {measurementUnit}</p>
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape ({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    img: PropTypes.string
}

export default Pokemon;