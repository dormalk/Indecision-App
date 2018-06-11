import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount = () => {
        try{
            const data = localStorage.getItem('options');
            const options = JSON.parse(data);
    
            if(options){
                this.setState(() => ({options}));
            }    
        }
        catch(e){

        }
    }

    componentDidUpdate = (prevProps,prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }

    hendleDeleteOptions = () => {
        this.setState(() => ({options: []})); 
    }

    hendlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));    
    }

    hendleAddOption = (option) => { 
        if(!option) {
            return 'Enter valid value to add';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option is already exists';
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        }
    }
    hendleClearOption = () => {
        this.setState(() => ({selectedOption: undefined}));            
    }
    hendleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions = {this.state.options.length > 0}
                        hendlePick = {this.hendlePick}
                    />
                    <div className="widget">
                        <Options 
                            hendleDeleteOptions={this.hendleDeleteOptions} 
                            options = {this.state.options}
                            hendleRemoveOption = {this.hendleRemoveOption}
                        />
                        <AddOption hendleAddOption = {this.hendleAddOption}/>                
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    hendleClearOption={this.hendleClearOption}    
                />
            </div>    
        );
    }
}
