import React from 'react';

// 
const Modal = (props) => {
    return (
        <div className='modal' style={{backgroundColor:props.color}}>
            <h4>{props.name[props.title]}</h4>
            <p>{props.date}</p>
        </div>
    );
};

export default Modal;