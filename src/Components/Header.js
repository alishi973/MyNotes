import React,{useContext} from 'react';
import {NoteContext} from "../Contexts/Note.Context";

const Header = (props) => {
    const note=useContext(NoteContext);

    function newNote(){
        note.setCurrentNote({name:null,text:""})
    }
    function setName(){
        let newNoteName=prompt("Enter New Name",note.currentNote.name?note.currentNote.name:"");
        note.setCurrentNote((prevState)=>
            ({...prevState,name:newNoteName})
        );
    }
    return ( 
        <header>
            <h1>NoteList</h1>
            <div>
                <p><div onClick={newNote} style={{marginLeft:"20px",cursor:"pointer"}}>+</div></p>
                <div onClick={setName}>{note.currentNote.name?note.currentNote.name:"No Name"}</div>
            </div>
        </header>
     );
}
 
export default Header;