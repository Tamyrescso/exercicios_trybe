import React, { Component } from "react";

class Reset extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleClear } = this.props;
        return (
            <button type='reset' onClick={handleClear}>Clear</button>
        )
    }
}

export default Reset;
