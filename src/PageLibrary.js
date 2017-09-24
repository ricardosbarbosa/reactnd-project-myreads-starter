import React, { Component } from 'react'
import Bookshelf from './ComponentBookshelf'
import { Link } from 'react-router-dom'

class PageLibrary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: props.books
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState( {
      books: nextProps.books
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf changeBookshelf={this.props.changeBookshelf} title='Currently Reading' books={this.state.books} shelf='currentlyReading' />
            <Bookshelf changeBookshelf={this.props.changeBookshelf} title='Want to Read' books={this.state.books} shelf='wantToRead'/>
            <Bookshelf changeBookshelf={this.props.changeBookshelf} title='Read' books={this.state.books} shelf='read'/>
          </div>
        </div>
        <div className="open-search">
          <Link to='search'>
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default PageLibrary