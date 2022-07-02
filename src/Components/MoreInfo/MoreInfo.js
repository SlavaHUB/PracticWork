import React from 'react';
import MainContent from '../MainContent/MainContent';
import './MoreInfo.css'

function MoreInfo(props) {
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