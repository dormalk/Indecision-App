import React from 'react';
import Option from './Option.js';


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.hendleDeleteOptions}
            >
            Remove All    
            </button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Please add option to get started!</p>}
        {
            props.options.map((option,index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index+1}
                    hendleRemoveOption = {props.hendleRemoveOption}
                />
            ))
        }
    </div>
);
export default Options;