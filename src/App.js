import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import PageLibrary from './PageLibrary'
import PageSearch from './PageSearch'
import { Route } from 'react-router-dom'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {

  state= {
    books: []
  }

  componentDidMount() {
    BooksApi.getAll().then( (books) => {
      this.setState({ books });
    })
  }

  addBook = (book) => {
    BooksApi.getAll().then( (books) => {
      this.setState({ books });
    })
  }

  changeBookshelf = (book_id, shelf) => {
    var books = []
    console.log(book_id, shelf)
    if (shelf === 'none')
      books = this.state.books.filter( book => book.id !== book_id)
    else
      books = this.state.books.map( book => {
        if (book.id === book_id)
          book.shelf = shelf
        return book
      })
    this.setState({ books });
  }
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <PageSearch  books={this.state.books} addBook={this.addBook}/>
        )}/>
        <Route exact path='/' render={() => (
          <PageLibrary books={this.state.books} changeBookshelf={this.changeBookshelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
