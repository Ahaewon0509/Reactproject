import React from 'react';
// import $ from "jquery";

// 
const Modal = (props) => {
    return (
        <div className='modal' style={{backgroundColor:props.color}}>
            <div className='modalPop'>
                <h4>{props.name[props.title]}</h4>
                <p>{props.date}</p>
            </div>
        </div>
    );
    // componentDidMount(){
    //     $("#searchClick").on("click", function(){
    //         $("#searchPopUpBox").addClass("disb");
    //     });
    //     $("#closeBtn").on("click", function(){
    //         $("#searchPopUpBox").removeClass("disb");
    //     });
    // }

};

export default Modal;