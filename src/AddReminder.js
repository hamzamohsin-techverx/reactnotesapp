import React, { useState } from 'react';

const AddReminder = (props) => {
    const [reminder , setReminder] =useState({
        remind:"",
        message:"",
     });
     const [close ,setClose] =useState(false);
    const inputEvent = (event) => {
        const {name , value} =event.target;
        setReminder((prevData)=> {
            return{
                ...prevData,
                [name]:value,
            };
        });
    }

    const addEvent = () => {
        props.passReminder(reminder);
        setReminder({
            remind:"",
            message:"",
         });
    }
    const drawOpen = () => {
        setClose(true);
    }
    const drawClose = () => {
        setClose(false);
    }

    return (
        <div className="main_note">
            <div className="notes-wrap">
                <form className="w-100">
                    {close?
                    <input
                     type="text" 
                     onChange={inputEvent}
                     value= {reminder.remind} 
                     placeholder="Enter Your Reminder" 
                     name="remind"
                     onClick={drawOpen}
                     />
                    :null}
                     <textarea
                     type="text" 
                     onChange={inputEvent}
                     value= {reminder.message}
                     placeholder="Write a Reminder"
                     name="message"
                     onClick={drawOpen}
                     onDoubleClick={drawClose} >
                         Add Your Description...
                    </textarea>
                    </form>
                    {close ?
                    <button className="custom-btn" onClick={addEvent}><i className="fa fa-plus"></i></button>
                    :null}
            </div>
        </div>
    );
}

export default AddReminder;