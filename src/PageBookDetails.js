import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PageBookDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: props.book
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({book: nextProps.book});

  }

  render() {
    console.log('rendering details')
    return (
      <div className="search-books">
        <div>
          <Link to='/' className='close-search'>
            Close
          </Link>
        </div>
        <h1>{this.state.book.title}</h1>

        <h2>{this.state.book.subtitle}</h2>
        <h3>{this.state.book.authors}</h3>
        <div> <span style={{size: 30 }}> averageRating </span> {this.state.book.averageRating} </div>
        <div> <span style={{size: 30 }}> categories </span> {this.state.book.categories} </div>
        <div> <span style={{size: 30 }}> description </span> {this.state.book.description} </div>
        <div> <span style={{size: 30 }}> pageCount </span> {this.state.book.pageCount} </div>
        <div> <span style={{size: 30 }}> publisher </span> {this.state.book.publisher} </div>
        <div> <span style={{size: 30 }}> publishedDate </span> {this.state.book.publishedDate} </div>
      </div>
    )
  }
}

export default PageBookDetails