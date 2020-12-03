import React from 'react';

const Note = (props) => {
  const deletebtn = () => {
    props.deleteItem(props.id);
  }

  return(  
        <div className="col-sm-4 mt-3">
        <div className="Card">
         <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="custom-btn delete" onClick={deletebtn}><i className="fa fa-trash"></i></button>
        </div> 
    </div>
  )
}

export default Note;
