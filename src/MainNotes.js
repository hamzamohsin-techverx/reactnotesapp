import React , {useState} from 'react';
import Note from './Note';  
import CreateNote from './CreateNote';

const MainNotes = () => {
    const [addItem , setAddItem] = useState([]);
  const addNote = (note) =>{
    setAddItem((olddata) => {
      return [...olddata , note];
    });
  }
 const  onDelete = (id) => {
      setAddItem((oldData) => 
        oldData.filter((currdata , index) =>{
          return index !== id;
        })
      )
 }
    return (
    <>
    <CreateNote passNote={addNote}  />
    <div className="row">
      {addItem.map((val , index)=> {
      return <Note 
      key={index} 
      id={index}
       title={val.title} 
       content={val.content}
       deleteItem={onDelete}/>
    })}
    </div>
    </>
    );
}

export default MainNotes;