import React, { Component } from 'react'
import * as BooksApi from './BooksAPI'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.book.shelf
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState( {
      value: nextProps.book.shelf
    });
  }

  updateBookShelf = (e) => {
    const shelf = e.target.value
    BooksApi.update({id: this.props.book.id }, shelf).then((data) => {
      console.log('update')
      console.log(data)
      // const sucesso = data[shelf].filter( book_id => book_id === this.props.book.id)
      // if (sucesso.length > 0)
      this.props.changeBookshelf(this.props.book.id, shelf)
    })
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.updateBookShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead" >Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Menu