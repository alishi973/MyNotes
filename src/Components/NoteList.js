import React,{useContext} from 'react';
import {NoteContext} from "../Contexts/Note.Context"
import Note from './EachNote';
export default (props)=>{
    let noteContext=useContext(NoteContext);
    return (
        <div className="wrapper-notes">
            {
                noteContext.allNotes&&
                JSON.parse(noteContext.allNotes).map((EachNote,index)=>
                    <Note name={EachNote.name} date={EachNote.date} text={EachNote.text} key={index} index={index} />
                )
            }
        </div>
    )
}