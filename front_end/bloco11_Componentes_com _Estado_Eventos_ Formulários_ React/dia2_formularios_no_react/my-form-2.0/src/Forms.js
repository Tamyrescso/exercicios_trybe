import React, { Component } from "react";
import Personnel from "./Personnel";
import Professional from "./Professional";
import Submit from "./Submit";
import Reset from "./Reset";

class Forms extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            state: '',
            type: '',
            sumarize: '',
            positionDescription: '',
            list: ''
        }
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.value;
        this.setState({[name]: value})
    }

    handleClear = () => {
        return Object.keys(this.state).map(key => {
            return this.setState({[key]: ''})
        })
    }

    handleResult = () => {
        const array = Object.entries(this.state).map((group) => {
            if(group[0] !== 'list') return `${group[0]}: ${group[1]}`
        })
        this.setState({list: array})
        return array
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <section className='Wrapper'>
                <h1>Curriculum Vitae</h1>
                <form className='Forms' onSubmit={this.handleSubmit}>
                    <Personnel handleChange={this.handleChange} value={this.state} />
                    <Professional handleChange={this.handleChange} value={this.state} />
                    <Submit handleResult={this.handleResult} />
                </form>
                <div>
                    {this.state.list !== '' && this.state.list.map((line) => <p>{line}</p>)}
                    <Reset handleClear={this.handleClear} />
                </div>
            </section>
        )
    }
}

export default Forms;