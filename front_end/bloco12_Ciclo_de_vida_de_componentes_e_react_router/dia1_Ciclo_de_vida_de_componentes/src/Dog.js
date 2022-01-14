import React, { Component } from "react";

class Dog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogImage: '',
        }
    }

    async componentDidMount() {
        const request = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await request.json();
        const img = data.message;

        this.setState({dogImage: img})
        const breed = (img.split('/', 5)).at(-1)
        alert(breed)
    }

    handleClick = () => {
        this.componentDidMount();
    }

    shouldComponentUpdate(_nextProps, { dogImage }) {
        const terrier = dogImage.includes('terrier');
        return !terrier
    }

    componentDidUpdate(_prevProps, { dogImage }) {
        localStorage.setItem("dog",JSON.stringify(dogImage))
    }

    render() {
        const { dogImage } = this.state;
        const divImage = (
            <div>
                <img src={dogImage} />
                <button type='button' onClick={this.handleClick}>Buscar dog!</button>
            </div>
        )
        return dogImage.length ? divImage : <p>Loading...</p>
    }
}

export default Dog;