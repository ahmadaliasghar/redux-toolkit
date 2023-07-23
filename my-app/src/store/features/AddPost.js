import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addPost } from '../slice/PostSlice'

const AddPost = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = () => {
      if(title && content) {
        dispatch(addPost({
            id: nanoid(),
            title: title,
            content: content
        }))
      }
        settitle(""); 
        setcontent("");
    }

  return (
    <div>
      <div>
        <label htmlFor="title">Add Title</label>
        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content">Add Content</label>
        <input type="text" value={content} onChange={(e)=>setcontent(e.target.value)} />
      </div>
      <button type='button' onClick={handleSubmit}>Submit</button>
      {/* </form> */}
    </div>
  )
}

export default AddPost
