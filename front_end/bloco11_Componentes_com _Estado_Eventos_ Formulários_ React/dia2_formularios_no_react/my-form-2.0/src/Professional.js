import React, { Component } from "react";


class Professional extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleChange, value } = this.props;
        return (
            <fieldset className='professional-data'>
                <label>
                    Resumo do Currículo:
                    <textarea
                        type='text'
                        name='sumarize'
                        className='sumarize'
                        onChange={handleChange}
                        value={value.sumarize}
                        maxLength='1000'
                        required={true}
                    />
                </label>
                <label>
                    Descrição do último cargo:
                    <input
                        type='text'
                        name='positionDescription'
                        className='positionDescription'
                        onChange={handleChange}
                        value={value.positionDescription}
                        maxLength='500'
                        required={true}
                    />
                </label>
            </fieldset>
        )
    }
}

export default Professional;