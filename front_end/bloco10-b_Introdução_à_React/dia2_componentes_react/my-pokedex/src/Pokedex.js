import React, { Component }from "react";
import Pokemon from "./Pokemon";
import pokemons from './data';

class Pokedex extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className='Pokedex'>
                {pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)}
            </section>
        )
    }
}

export default Pokedex;
