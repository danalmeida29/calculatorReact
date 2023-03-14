import React from 'react';
import './Button.css';


// export default props => {

//     let classes = 'button'
//     classes += props.operation ? 'operation' : '';
//     classes += props.double ? 'double' : '';
//     classes += props.triple ? 'triple' : '';

//     return(
//         <button 
//         className={classes}
//         onClick={e => props.click && props.click(e.target.label)}
//         >
//             {props.label}
//         </button>
//     )
// }

/** Outra for de fazer: */

export default props => 
    <button 
    onClick={e => props.click && props.click(e.target.label)}
    className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>


