import React from "react";
import noteContext from "./notesContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
    const notei = []
      const [notes, setNotes] = useState(notei);

      //Get all notes
      const getNotes = async () => {

        const response = await fetch( `${host}/api/notes/fetchallnotes`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwZDBjM2MzY2ZlOWI5OWNiNDRjYmUxIn0sImlhdCI6MTcxMjEzMTIwMH0.T6xtcpg5ZF_dPy1mVJXFADpUAclVysqftw7XmgH8OtQ"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
      }

      //Add note
      const addNote = async (title, description, tag) => {

        const response = await fetch( "http://localhost:5000/api/notes/addnote", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.  
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwZDBjM2MzY2ZlOWI5OWNiNDRjYmUxIn0sImlhdCI6MTcxMjEzMTIwMH0.T6xtcpg5ZF_dPy1mVJXFADpUAclVysqftw7XmgH8OtQ"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });
        const note = await response.json();
        setNotes(notes.concat(note));
        
      }
      
      //delete note
      const deleteNote = async (id) => {
        const response = await fetch( `${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwZDBjM2MzY2ZlOWI5OWNiNDRjYmUxIn0sImlhdCI6MTcxMjEzMTIwMH0.T6xtcpg5ZF_dPy1mVJXFADpUAclVysqftw7XmgH8OtQ"
            
        }});
        const json = await response.json();
        console.log(json);

        const newNotes = notes.filter((note) => {return note._id!==id})
        setNotes(newNotes);
      }
      //edit note
      const editNote = async (id, title, description, tag) => {

        const response = await fetch( `${host}/api/notes/updatenote/${id}`, {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwZDBjM2MzY2ZlOWI5OWNiNDRjYmUxIn0sImlhdCI6MTcxMjEzMTIwMH0.T6xtcpg5ZF_dPy1mVJXFADpUAclVysqftw7XmgH8OtQ"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
          
        }
        setNotes(newNotes);
      }

    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;