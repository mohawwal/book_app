import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3000/books")
                setBooks(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])


    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:3000/books/" + id)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='bookshelf'>
      <h1>Wally's Book Shop</h1>
      <div className='books'>
        {books.map(book => (
            <div className='book' key={book.id}>
                <h3>{book.title}</h3>
                <div className='desc length'>
                    <h4>DESCRIPTION</h4>
                    <p>{book.desc}</p>
                </div>
                <div className='length'>
                    <h4>PRICE</h4>
                    <span>{book.price}</span>
                </div>
                <div className='length'>
                <button className='book-btn' onClick={() => handleDelete(book.id)}>Delete</button>
                <button className='book-btn'><Link to={`/update/${book.id}`}>Update</Link></button>
                </div>
            </div>
        ))}
      </div>
      <div className='add'>
      <button className='book-btn'><Link to="/add">Add new book</Link></button>
      </div>
    </div>
  )
}

export default Books
