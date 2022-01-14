import React, { Component } from "react";

class Submit extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleResult } = this.props;
        return <button type='submit' onClick={handleResult}>Submit</button>
    }
}

export default Submit;