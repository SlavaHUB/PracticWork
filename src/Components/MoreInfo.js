import React, { useState } from 'react';
import MainContent from './MainContent';
import './MoreInfo.css'
/*
              <div className="cardDiv" onClick={() => { props.handleClick(props.book) }}>
                          <img src={`${props.book.volumeInfo.imageLinks.smallThumbnail}`} alt="Image" />
                          <p className="categories">{props.book.volumeInfo.categories}</p>
                          <p className="title">{props.book.volumeInfo.title}</p>
                          <p className='authors'>{props.book.volumeInfo.authors}</p>
                      </div>
*/
function MoreInfo(props) {
  console.log(props.book)
  return props.isBookChoosen === false ? <MainContent /> : (
    <div>

      <div className="left">
        <img className='image' src={`${props.book.volumeInfo.imageLinks.smallThumbnail}`} alt="Image" />
      </div>
      <div className="right">
        <p className='myCategories'>Genre: {props.book.volumeInfo.categories}</p>
        <p className='myTitle'>{props.book.volumeInfo.title}</p>
        <p className='myAuthors'>{props.book.volumeInfo.authors}</p>
        <p className='myDescription'>{props.book.volumeInfo.description}</p>
        <button className='myButton' onClick={() => props.setIsBookChoosen(false)}>Назад</button>
      </div>
    </div>
  )
}

export default MoreInfo;