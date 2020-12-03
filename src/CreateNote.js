import React , {useState} from 'react';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    
    const [expand , setExpand] = useState(false);
    const InputEvent = (event) => {
        const {name , value} =event.target;
        setNote((prevData) => {
            return{
             ...prevData,
             [name] : value,
            };
        });
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    const expandIt = () => {
        setExpand(true);    
    }
    const expandClose = () => {
        setExpand(false);
    }
  return(
  
    <div className="main_note">
            <div className="notes-wrap">
                <form className="w-100">
            {expand ?
               <input 
               type="text"
               value={note.title}
               placeholder="Title" 
               autoComplete="off"
               onChange={InputEvent}
               name="title"
               /> : null }
                <textarea 
                rows="" 
                value={note.content}
                column="" 
                placeholder="Write a Note"
                onChange={InputEvent}
                onClick={expandIt}
                onDoubleClick = {expandClose}
                name="content">
                    Write a Note..     
                </textarea>
                </form>
                {expand ?
                <button className="custom-btn" onClick={addEvent}><i className="fa fa-plus"></i></button>
                : null}
            </div>
    </div>
  )
}

export default CreateNote;