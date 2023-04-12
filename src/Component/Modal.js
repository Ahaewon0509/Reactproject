import React from 'react';

// 
const Modal = (props) => {
    return (
        <div className='modal' style={{backgroundColor:props.color}}>
            <h4>{props.name[props.title]}</h4>
            <p>상세내용</p>
        </div>
    );
};

export default Modal;