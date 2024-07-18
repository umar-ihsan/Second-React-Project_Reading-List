import React from 'react';
import {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Ninja reading list</h1>
            <p>Currently you have {books.length} books in the list..</p>
        </div>
        
    );
}
 
export default Navbar;