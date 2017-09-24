import React, { Component } from 'react'
import Menu from './ComponentMenu'
import { Link } from 'react-router-dom'

class Book extends Component {

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <Link to={'books/'+ this.props.book.id}>
            <div
              className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}>
            </div>
          </Link>
          <Menu book={this.props.book} changeBookshelf={this.props.changeBookshelf}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book