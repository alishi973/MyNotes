import React,{useContext} from 'react';
import {NoteContext} from '../Contexts/Note.Context';

export default (props)=>{
    let note=useContext(NoteContext)

    return (
        <div id="notPad">
            <textarea style={{resize:"none"}} value={note.currentNote.text} 
            onChange={
                e=>{
                    note.setCurrentNote({name:note.currentNote.name,text:e.target.value})
                }
            }
            >

            </textarea>
            <button onClick={()=>{
                note.appendNoteToLS();
            }}>Save
            </button>
        </div>
    )
}