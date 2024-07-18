import React, { useState } from 'react';
import {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {

    const {dispatch}= useContext(BookContext);

    const[title,setTitle]=useState('');
    const[author,setauthor]=useState('');

    const handleClick = (e)=>{
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title,author}});
        setTitle('');
        setauthor('');
    }
    return ( 
        <form>
            <label>Book Name: </label>
            <input type="text" placeholder="Enter Book Name" value={title} onChange={(e)=>(setTitle(e.target.value))} required />
            <label>Author Name: </label>
            <input type="text" placeholder="Enter Author Name" value={author} onChange={(e)=>(setauthor(e.target.value))} required />
            <button onClick={handleClick}>Click to Add</button>

        </form>
     );
}
 
export default BookForm;