import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { validateLogin } from '../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            senha: '',
        };
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    handleClick = () => {
        const { isLogged } = this.props;
        const { email, senha } = this.state;
        if (email.length > 0 && senha.length > 0) {
            isLogged(true);
        } else {
            isLogged(false);
        }
    }
    render() {
        const { email, senha } = this.state;
        return (
            <fieldset>
                <Input
                    label="Email: "
                    type="text"
                    onChange={ this.handleChange }
                    value={ email }
                    name="email"
                    required
                />
                <Input
                    label="Senha: "
                    type="password"
                    onChange={ this.handleChange }
                    value={ senha }
                    name="senha"
                    required
                />
                <Link to="/clients">
                    <Button
                        type="button"
                        label="Enviar"
                        onClick={ this.handleClick }
                    />
                </Link>
            </fieldset>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    isLogged: (state) => dispatch(validateLogin(state))
})

Login.propTypes = {
    isLogged: PropTypes.func.isRequired,
  };

export default connect(null, mapDispatchToProps)(Login);