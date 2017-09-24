import React, { Component } from 'react'
import Book from './ComponentBook'

class Bookshelf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: props.books.filter( (book) => (book.shelf === props.shelf ))
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState( {
      books: nextProps.books.filter( (book) => (book.shelf === nextProps.shelf ))
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.state.books.map( (book) => (
                <li key={book.id}>
                  <Book book={book} changeBookshelf={this.props.changeBookshelf}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf

