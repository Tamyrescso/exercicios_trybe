import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Link to="/login">
                <h2>Faça seu login!</h2>
            </Link>
        )
    }
};

export default Home;