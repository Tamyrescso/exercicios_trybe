import React, { Component }from "react";
import Pokemon from "./Pokemon";
import pokemons from './data';
import Buttons from './Buttons'

class Pokedex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexPokemon: 0,
            newArrayPokemons: pokemons
        }
    }

    handleClick = () => {
        (this.state.indexPokemon === this.state.newArrayPokemons.length-1) ?
        this.setState({indexPokemon: 0})
        :
        this.setState((prevState, _props) => ({
            indexPokemon: prevState.indexPokemon + 1
        }))
    }

    filteredPokemons = (event) => {
        let newArray = null;
        (event.target.innerText === 'All') ?
        newArray = pokemons.map(pokemon => pokemon)
        :
        newArray = pokemons.filter(pokemon => pokemon.type === event.target.innerText)

        return this.setState({indexPokemon: 0, newArrayPokemons: newArray})
    }

    render() {
        const { indexPokemon, newArrayPokemons} = this.state;
        return (
            <section className='Pokedex'>
                {newArrayPokemons
                .filter(pokemon => pokemon === newArrayPokemons[indexPokemon])
                .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                <Buttons pokemons={pokemons} filteredPokemons={this.filteredPokemons} />
                <button
                className='Next'
                onClick={this.handleClick}
                disabled={this.state.newArrayPokemons.length === 1? true : false}
                >Next</button>
            </section>
        )
    }
}

export default Pokedex;
