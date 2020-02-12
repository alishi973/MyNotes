import React, { useContext } from 'react';
import NotePad from './NotePad'
import NoteList from './NoteList'
import Header from './Header'
import "../index.css";
import NoteContextProvider,{NoteContext} from '../Contexts/Note.Context';

export default (props) => {
    let allNote=useContext(NoteContext);
    return (  
        <div>
            <NoteContextProvider>
                <Header />
                    <div className="container">
                        <NoteList />
                        <NotePad />  
                    </div>
            </NoteContextProvider>
        </div>
    );
}