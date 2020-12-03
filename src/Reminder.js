import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddReminder from './AddReminder';
import ReminderShow from './ReminderShow';

const Reminder = () => {
    const [addReminder, setAddReminder] = useState([]);
    const MainReminder = (reminder) => {
        setAddReminder((oldData) => {
            return [...oldData,reminder];
        })
    }
    const onDelete = (id) => {
        setAddReminder((oldData) => {
            oldData.filter((currData ,index) => {
                return index !== id;
            })
        })
    }
    return(
    <>
   
    <AddReminder passReminder={MainReminder}/>
    <div className="row">
    {addReminder.map((val,index)=> {
       return <ReminderShow 
        key = {index}
        id = {index}
        remind ={val.remind}
        message ={val.message}
        deleteReminder ={onDelete}
        />
    })
    }
    </div>
    </>
    );
}

export default Reminder;