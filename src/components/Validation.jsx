import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text is too short';
    if(props.userLength >=5){
        validationMessage ='Text is long enough';
    }
    return <div> {props.userLength}
        {validationMessage}
    </div>
}
 
export default validation;
