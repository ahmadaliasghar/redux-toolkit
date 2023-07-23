import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addPost } from '../slice/PostSlice'
import { showUsers } from '../slice/UserSlice'

const AddPost = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [userId, setUserId] = useState("")

    const dispatch = useDispatch();
    const users = useSelector(showUsers);
    const canAdd = Boolean(userId) && Boolean(title) && Boolean(content)

    const handleSubmit = () => {
        dispatch(addPost(title, content, userId))
        settitle(""); 
        setcontent("");
    }


    const userOptions = users.map((user) => (
      <option value={user.id} key={user.id}>{user.name}</option>
      ))

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
      <div>
        <select value={userId} onChange={(e => setUserId(e.target.value))}>
          <option value=""></option>
          {userOptions}
        </select>
      </div>
      <button type='button' disabled={canAdd ? false : true} onClick={handleSubmit}>Submit</button>
      {/* </form> */}
    </div>
  )
}

export default AddPost
