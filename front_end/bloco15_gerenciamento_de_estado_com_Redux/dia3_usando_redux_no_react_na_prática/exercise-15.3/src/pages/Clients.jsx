import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    const { clientsData, isLogged } = this.props;
    return (
        <>
        {isLogged ?
            <div>
                {clientsData.length > 0 ?
                    <div>
                        <h2>Clientes já cadastrados:</h2>
                        {clientsData.map((client) => {
                            return <div>
                                <h3>Nome: {client.nome}</h3>
                                <h4>Idade: {client.idade}</h4>
                                <h4>Email: {client.email}</h4>
                            </div>
                        })}
                    </div>
                : <h1>Nenhum cliente cadastrado.</h1>
                }
                <Link to="/registration">
                    <button>Cadastrar clientes</button>
                </Link>
            </div>
        : <h1>Login não efetuado</h1>}
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  clientsData: state.reducer.clients,
  isLogged: state.reducer.statusLogin,
});

Clients.propTypes = {
  clientsData: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Clients);
