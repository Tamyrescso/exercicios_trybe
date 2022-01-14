import React, { Component } from "react";
import estados from "./state";

class Personnel extends Component {
    constructor(props) {
        super(props)
    }

    handleBlurEmail = ({ target }) => {
        const regex = /^.+@\w+(.com)(.br)?/
        const value = target.value;
        const test = regex.test(value)
        if(test === false) {
            alert('Formato errado de e-mail')
        }
        return test
    }

    handleBlurCity = ({ target }) => {
        return isNaN(target.value[0])? target.value : target.value = ''
    }

    render() {
        const { handleChange, value } = this.props;
        return (
            <fieldset className='personnel-data'>
                <label>
                    Nome:
                    <input 
                        type='text'
                        name='name'
                        className='name'
                        onChange={handleChange}
                        value={value.name.toUpperCase()}
                        maxLength='40'
                        required={true}
                    />
                </label>
                <label>
                    E-mail:
                    <input
                        type='text'
                        name='email'
                        className='email'
                        onChange={handleChange}
                        onBlur={this.handleBlurEmail}
                        value={value.email}
                        maxLength='50'
                        required={true}
                    />
                </label>
                <label>
                    CPF:
                    <input
                        type='text'
                        name='cpf'
                        className='cpf'
                        onChange={handleChange}
                        value={value.cpf}
                        maxLength='11'
                        required={true}
                    />
                </label>
                <label>
                    Endereço:
                    <input
                        type='text'
                        name='address'
                        className='address'
                        onChange={handleChange}
                        value={value.address.replace(/[^a-zA-Z]/g, '')}
                        maxLength='200'
                        required={true}
                    />
                </label>
                <label>
                    Cidade:
                    <input
                        type='text'
                        name='city'
                        className='city'
                        onChange={handleChange}
                        onBlur={this.handleBlurCity}
                        value={value.city}
                        maxLength='28'
                        required={true}
                    />
                </label>
                <label>
                    Estado:
                    <select value={value.state} type='text' name='state' className='state' onChange={handleChange} required={true}>
                        {estados.map((estado) => <option value={estado}>{estado}</option>)}
                    </select>
                </label>
                <label>
                    Tipo de residência:
                    <input type='radio' name='type' className='type' onChange={handleChange} value='casa' required={true}/>Casa
                    <input type='radio' name='type' className='type' onChange={handleChange} value='apartamento' required={true}/>Apartamento
                </label>
            </fieldset>
        )
    }
}

export default Personnel;