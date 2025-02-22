import {v4 as uuidv4} from 'uuid'

export const BookReducer = (state , action) => {

    switch(action.type){
        case 'ADD_BOOK':
            const newbook= {title: action.book.title,
                author: action.book.author,
                id: uuidv4()}
            return [ ...state ,newbook ]
            case 'REMOVE_BOOK':
                return state.filter(book => book.id !== action.id)
                default:
                    return state
    }

}