import React from 'react';
import {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {

    const {dispatch}=useContext(BookContext)

    return ( 
        <div>
            <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
                <div className='title'>{book.title}</div>
                <div className="author">{book.author}</div>
            </li>
        </div>
      );
}
 
export default BookDetails;