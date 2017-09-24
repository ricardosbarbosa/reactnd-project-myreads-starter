import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from './BooksAPI'
import Book from './ComponentBook'

class PageSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      booksSearched: [],
      books: props.books
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('updating')
    console.log(nextProps)
    this.setState( (prevState, props) => {
      console.log(prevState.booksSearched)
      const booksSearchedVerified = this.verifyBooks(prevState.booksSearched, nextProps.books)
      console.log(booksSearchedVerified)
      return {
        booksSearched: booksSearchedVerified,
        books: nextProps.books
      }
    });
  }

  search = (e) => {
    const query = e.target.value;
    BooksApi.search(query).then(booksSearched => {
      console.log(booksSearched)
      const booksSearchedVerified = this.verifyBooks(booksSearched, this.state.books)
      this.setState({ booksSearched : booksSearchedVerified });
    })
  }

  verifyBooks = (booksSearched, books) => {
    const booksSearchedVerified = booksSearched.map( (bookSearched) => {
      const match = books.find( (book) => book.id === bookSearched.id)
      if (match) {
        bookSearched.shelf = match.shelf
      }
      else {
        bookSearched.shelf = 'none'
      }
      return bookSearched
    })
    return booksSearchedVerified
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" onChange={this.search} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.booksSearched.map( (book) => (
                <li key={book.id}>
                  <Book book={book} changeBookshelf={this.props.addBook} />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default PageSearch