import React from 'react';

const ReminderShow = (props) =>{
    const deletebtn = () => {
        props.deleteReminder(props.id);
    }
    return(
        <div className="col-sm-4 mt-3">
        <div className="Card">
         <h1>{props.remind}</h1>
            <p>{props.message}</p>
            <button className="custom-btn delete" onClick={deletebtn}><i className="fa fa-trash"></i></button>
        </div> 
    </div>
    );
}

export default ReminderShow;