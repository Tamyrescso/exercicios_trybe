import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveClient } from '../redux/actions';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            idade: 0,
        };
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    handleClick = () => {
        const { clientsRegistration } = this.props;
        clientsRegistration(this.state);
        this.setState({
            nome: '',
            email: '',
            idade: 0,
        })
    }
    render() {
        const { nome, email, idade } = this.state;
        const { isLogged } = this.props;
        return (
            <>
            {isLogged ?
                <fieldset>
                    <Input
                        label="Nome: "
                        type="text"
                        onChange={ this.handleChange }
                        value={ nome }
                        name="nome"
                        required
                    />
                    <Input
                        label="Idade: "
                        type="number"
                        onChange={ this.handleChange }
                        value={ idade }
                        name="idade"
                        required
                    />
                    <Input
                        label="Email: "
                        type="text"
                        onChange={ this.handleChange }
                        value={ email }
                        name="email"
                        required
                    />
                    <Button
                        type="button"
                        label="Enviar dados"
                        onClick={ this.handleClick }
                    />
                    <Link to="/clients">
                        <button>Clientes Cadastrados</button>
                    </Link>
                </fieldset>
            : <h1>Login não efetuado</h1>}
            </>
        )
    }
};

const mapStateToProps = (state) => ({
    isLogged: state.reducer.statusLogin,
  });

  const mapDispatchToProps = (dispatch) => ({
    clientsRegistration: (state) => dispatch(saveClient(state))
})

Registration.propTypes = {
    clientsRegistration: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);