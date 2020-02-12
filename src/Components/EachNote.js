import React,{useContext} from 'react';
import {NoteContext} from '../Contexts/Note.Context'



const Note = (props) => {
    let note=useContext(NoteContext);

    function handlerSetCurrentNote(index) {
        let currentNote=localStorage.getItem("notes")
        note.setCurrentNote(JSON.parse(currentNote)[index]);
    }
    function handlerDeleteCurrentNote(e){
        e.stopPropagation()
        note.deleteNoteFromLS(props.index)
    }

    return (  
        <div className="notes" onClick={()=>{handlerSetCurrentNote(props.index)}}>
            <div><h1>{props.name}</h1><p onClick={e=>handlerDeleteCurrentNote(e)}>x</p></div>
            <pre>{props.text.length>30?`${props.text.slice(0,30)}...`:props.text}</pre>
            <p>{props.date}</p>
        </div>
    );
}
 
export default Note;