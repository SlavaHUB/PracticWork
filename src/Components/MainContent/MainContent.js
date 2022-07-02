import './MainContent.css';
import MoreInfo from '../MoreInfo/MoreInfo';
import Book from '../Book/Book';
import React, { useState } from 'react';

function MainContent(props) {

    const [isBookChoosen, setIsBookChoosen] = useState(false);
    const [currentBook, setCurrentBook] = useState()
    const [startAmountOfBookOnPage, setStartAmountOfBookOnPage] = useState(0)
    const [endAmountOfBookOnPage, setEndAmountOfBookOnPage] = useState(10)

    const MINUS_DEFAULT_VALUE_BOOK = 10;
    const PLUS_DEFAULT_VALUE_BOOK = 10;

    const handleClick = book => {
        setCurrentBook(book);
        setIsBookChoosen(true);
    }

    const leftListOfBook = () => {
        if (!(startAmountOfBookOnPage <= 0)) {
            setStartAmountOfBookOnPage(startAmountOfBookOnPage - MINUS_DEFAULT_VALUE_BOOK)
        }
    }

    const rightListOfBook = () => {
        if (!(endAmountOfBookOnPage >= props.info.length)) {
            setStartAmountOfBookOnPage(endAmountOfBookOnPage + PLUS_DEFAULT_VALUE_BOOK)
        }
    }

    return isBookChoosen ? <MoreInfo book={currentBook} setIsBookChoosen={setIsBookChoosen} /> : (
        <div className="mainInf">
            {props.amountOfInf === undefined ? null : <h2>Found {props.amountOfInf} results</h2>}
            <div>
                {props.info.length === 0 ? '' :
                    props.info.slice(startAmountOfBookOnPage, endAmountOfBookOnPage).map(res => {
                        return res.volumeInfo.categories === undefined ? null :
                            (res.volumeInfo.imageLinks && res.volumeInfo.categories.includes(props.subject)) ?
                                <Book book={res} handleClick={handleClick} /> : null;
                    })
                }
            </div>
            <button className='test' value='<' onClick={leftListOfBook}></button>
            <button className='test' value='>' onClick={rightListOfBook}></button>
        </div>
    );
}

export default MainContent;