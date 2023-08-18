import React, { useState } from 'react'

const NewNote = () => {
    const[title,setTitle]=useState("");
    const[note,setNote]=useState("");

    const[data,setData]=useState([{
        t:'',
        n:'',
        id:'',
    }])

    const handleOnTitleChange=(event)=>{
        setTitle(event.target.value)
    }
    const handleOnNoteChange=(event)=>{
        setNote(event.target.value)
    }

    const addNote=()=>{
        setData((prev)=>{
            data.t=title;
            data.n=note;
            return [...prev, data]
        })
        setTitle('');
        setNote('');
    }
    const deleteNote=(idd)=>{
        console.log('j');
        setData((prev)=>{
           return prev.filter((n, index)=>{
            console.log(n)
            return idd!==index;

           })
        })
    }
  return (
    <div className='container'>
    <div className='create'>
        <input type='text' className='title' onChange={handleOnTitleChange} value={title} placeholder='title'></input>
        <textarea className='textar'  onChange={handleOnNoteChange} value={note} placeholder='write your notes here'></textarea >
        <button className='plus' onClick={addNote}>+</button>
    </div>

    <div className='done'>
        {data.map((d, index)=>{
            if(d.t==="" && d.n==="") return;
            else{
            return (
            <div className='doneNotes' key={index} id={index}>
                <h2 className='ctitle'>{d.t}</h2>
                <p>{d.n}</p>
                <button className='del' onClick={()=>deleteNote(index)}>-</button>
            </div>
          )}
        }
    )}
    </div>
    </div>
  )
}

export default NewNote;