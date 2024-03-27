import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    })

    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split("/")[2]
    

    const handleChange = (e) => {
        setBook(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        
        try{
            await axios.put("http://localhost:3000/books/" + bookId, book)
            navigate("/")
        }
        catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='update'>
      <h1>UPDATE THE BOOK</h1>
      <div className='update-textbox'>
        <input type="text" placeholder='title' onChange={handleChange} name='title' />
        <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
        <input type='number' placeholder='price' onChange={handleChange} name="price" />
        <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      </div>

      <button className='book-btn update-btn' onClick={handleClick}>Update Add</button>
    </div>
  )
}

export default Update

