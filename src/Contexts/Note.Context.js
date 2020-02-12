import React,{createContext,useState} from 'react';

export const NoteContext=createContext();

let getNoteFromLS=()=>{
    return localStorage.getItem("notes")
}


const NoteContextProvider = (props) => {
    const [currentNote,setCurrentNote]=useState({name:null,text:""});
    const [allNotes,setAllNotes]=useState(getNoteFromLS);

    const appendNoteToLS=()=>{
        let oldData=getNoteFromLS();
        let newCurrentNote;
        if(oldData){
            newCurrentNote={name:typeof(currentNote.name)==="string"?currentNote.name:prompt("Enter Name:"),text:currentNote.text,date:new Date().toLocaleString()};
            let newData=JSON.parse(oldData);
            let foundedIndex=searchObjectinArray(newData,newCurrentNote.name);
            if(foundedIndex!=-1){
                newData[foundedIndex]=newCurrentNote;
            }else{
                newData.push(newCurrentNote)
            }
            localStorage.setItem("notes",JSON.stringify( newData))            
        }
        else{
            newCurrentNote={name:typeof(currentNote.name)==="string"?currentNote.name:prompt("Enter Name:"),text:currentNote.text,date:new Date().toLocaleString()}
            localStorage.setItem("notes",`[${JSON.stringify(newCurrentNote)}]`)
        }
        setCurrentNote(newCurrentNote)
        setAllNotes(getNoteFromLS);
    }
    const deleteNoteFromLS=(index)=>{
        let oldData=JSON.parse(getNoteFromLS());
        oldData.splice(index,1)
        localStorage.setItem("notes",JSON.stringify(oldData))
        setAllNotes(getNoteFromLS);
    }



    return (  
        <NoteContext.Provider value={{currentNote,allNotes,setCurrentNote,setAllNotes,appendNoteToLS,deleteNoteFromLS}} >
                {props.children}
        </NoteContext.Provider>
        
    );
}
 
export default NoteContextProvider;


function searchObjectinArray(targetArray,Key){
    for (var i=0; i < targetArray.length; i++) {
        if (targetArray[i].name ===Key) {
            return i;
        }
    }
    return -1;
}