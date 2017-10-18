import React from 'react';

const Option =(props) => (
    <div>
        Option:  {props.optionText}
        <button onClick={(e)=>{return props.handleDeleteOption(props.optionText) }}>remove</button>
    </div>

);


export default  Option;