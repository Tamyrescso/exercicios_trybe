import React, { Component } from "react";
import PropTypes from 'prop-types';

class Buttons extends Component {
    constructor (props) {
        super (props)
    }

    pokemonsSameType = (array) => {
        return array.reduce((acc, pokemon) => {
            let result = null
            return (acc.includes(pokemon.type)) ?
            result = acc
            :
            result = acc.concat(pokemon.type)
        }, [])
    }

    render () {
        const { pokemons, filteredPokemons } = this.props
        return (
            <div className='Buttons'>
                {this.pokemonsSameType(pokemons).map((type) => <button key={type} onClick={filteredPokemons}>{type}</button>)}
                <button key='All' onClick={filteredPokemons}>All</button>
            </div>
        )
    }
}

Buttons.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object),
    filteredPokemons: PropTypes.func,
}

export default Buttons;