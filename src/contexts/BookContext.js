import React from 'react';
import {createContext,useReducer,useEffect} from 'react';

import { BookReducer } from '../reducers/BookReducer';


export const BookContext = createContext();


const  BookContextProvider = (props) => {

    const [books,dispatch]=useReducer(BookReducer,[{title:'way of kings', author: 'brandon sanderson', id:1},
                                     {title:'harry potter', author: 'JK rowlings', id:2},
                                     {title:'Lord of the rings', author:'JRR Tolkien', id:3}],()=>{
                                        const localDat = localStorage.getItem('books');
                                        return localDat ? JSON.parse(localDat) : []
                                     });

   

    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    })

    return ( 

        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>

     );
}
 
export default BookContextProvider ;


