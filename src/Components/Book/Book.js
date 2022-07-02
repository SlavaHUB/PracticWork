import './Book.css';

function Book(props) {
    return (
        <div className="cardDiv" onClick={() => { props.handleClick(props.book) }}>
            <img src={`${props.book.volumeInfo.imageLinks.smallThumbnail}`} alt="Image" />
            <p className="categories">{props.book.volumeInfo.categories}</p>
            <p className="title">{props.book.volumeInfo.title}</p>
            <p className='authors'>{props.book.volumeInfo.authors}</p>
        </div>
    );
}

export default Book;