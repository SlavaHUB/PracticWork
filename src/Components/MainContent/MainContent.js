import './MainContent.css';
import MoreInfo from '../MoreInfo/MoreInfo';
import Book from '../Book/Book';
import React, { useState } from 'react';

function MainContent(props) {

    const [isBookChoosen, setIsBookChoosen] = useState(false);
    const [currentBook, setCurrentBook] = useState()


    const handleClick = book => {
        setCurrentBook(book);
        setIsBookChoosen(true);
    }

    return isBookChoosen ? <MoreInfo book={currentBook} setIsBookChoosen={setIsBookChoosen} /> : (
        <div className="mainInf">
            {props.amountOfInf === undefined ? null : <h2>Found {props.amountOfInf} results</h2>}
            <div>
                {props.info.length === 0 ? '' :
                    props.info.map(res => {
                        return res.volumeInfo.categories === undefined ? null :
                            (res.volumeInfo.imageLinks && res.volumeInfo.categories.includes(props.subject)) ?
                                <Book book={res} handleClick={handleClick} /> : null;
                    })
                }
            </div>
        </div>
    );
}

export default MainContent;
