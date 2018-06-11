import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    hendleAddOption = (e) =>{
        e.preventDefault();
        
        const option = e.target.elements.option.value;
        const error = this.props.hendleAddOption(option)

        this.setState(() => ({ error }));

        e.target.elements.option.value = '';
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.hendleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

