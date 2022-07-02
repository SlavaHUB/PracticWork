import './Body.css';
import React, { useState } from 'react';
import MainContent from './MainContent';
import { bookApi } from './bookApi';

function Body() {

    const [info, setInfo] = useState([])
    const [amountOfInf, setAmountOfInf] = useState();
    const [searchStr, setSearchStr] = useState('');
    const [category, setCategory] = useState('');
    const [sort, setSorted] = useState('Relevance');

    const handleSubmit = (e) => {
        e.preventDefault();

        let links = `https://www.googleapis.com/books/v1/volumes?` +
                    `q=${searchStr ? searchStr : 'all'}` +
                    `&subject=${category}` +
                    `&orderBy=${sort}` +
                    `&maxResults=40` +
                    `&key=AIzaSyCdrXm7ZD4Jn0vy_QrUkZLKhtFkFohzqVs`;

        console.log(links);
        bookApi(links).then((response) => setInfo(response.items));
        bookApi(links).then((response) => setAmountOfInf(response.totalItems));
    }
    console.log(info);

    return (
        <div className='Div'>
            <h1 className='search'>Search for books</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setSearchStr(e.target.value) }} />
            </form>
            <div className='inlineDiv'>
                <p className='myP'>Category</p>
                <select onChange={(e) => { setCategory(e.target.value) }}>
                    <option value='Art'>Art</option>
                    <option value='Biography'>Biography</option>
                    <option value='Computers'>Computers</option>
                    <option value='History'>History</option>
                    <option value='Medical'>Medical</option>
                    <option value='Poetry'>Poetry</option>
                </select>
                <p className='myP'>Sorting by</p>
                <select onChange={(e) => { setSorted(e.target.value) }}>
                    <option value='Relevance'>Relevance</option>
                    <option value='Newest'>Newest</option>
                </select>
            </div>
            <MainContent amountOfInf={amountOfInf} info={info} subject={category} sort={sort} />
        </div>
    );
}

export default Body;