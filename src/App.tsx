import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import { Box } from "@mui/material";
import Notes from './components/Notes';
import { NoteObject } from './models/note';


function App() {
  const [notes,setNotes] = useState<NoteObject[]>([]);//NoteObject[] means (NoteObject is an object and [] means array of object)

  useEffect(()=>{
    if(sessionStorage.getItem("notes")){
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string))
    }
  },[]);

  const addNotes = (note:NoteObject) => {
    setNotes([ note , ...notes ]);
    sessionStorage.setItem("notes",JSON.stringify([note , ...notes]));
  }

  const deleteNote = (toBedeleteId:string) => {
    const updatedNotesAfterDelete = notes.filter(note=>note.id !== toBedeleteId);
    setNotes(updatedNotesAfterDelete);
    sessionStorage.setItem("notes",JSON.stringify(updatedNotesAfterDelete));
  }

  return (
    <>
      <Header />
      <Box style={{padding:20}}>
        <CreateNote addNotes={addNotes}/>
        <Notes notes={notes} deleteNote={deleteNote}/>
      </Box>
    </>
  );
}

export default App;
