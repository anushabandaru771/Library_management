import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './Card'
import data from '../data.json'

class Home extends Component {
	state = {
		books: [],
		query: '',
		filtered: [],
		success: '',
		error: '',
		loaded: 10,
	}

	componentDidMount() {
		this.setState({ books: data.books, filtered: data.books })
	}

	loadMore = () => {
		this.setState((prev) => ({
			loaded: prev.loaded + 10,
		}))
	}

	handleInputChange = (event) => {
		const query = event.target.value
		console.log(query)
		this.setState((prevState) => {
			const filteredData = prevState.books.filter((element) => {
				return (
					element.title.toLowerCase().includes(query.toLowerCase()) ||
					element.genre.toLowerCase().includes(query.toLowerCase()) ||
					element.author.toLowerCase().includes(query.toLowerCase()) ||
					`${element.year}`.includes(query.toLowerCase())
				)
			})
			return {
				query,
				filtered: filteredData,
			}
		})
	}

	handleBookDelete = (id) => {
		const { filtered } = this.state
		const data = filtered.filter((book) => book.id !== id)
		this.setState({ filtered: data })
	}

	render() {
		const { success, error, query, filtered, loaded } = this.state
		return (
			<Fragment>
				<div className='search'>
					<input
						type='text'
						className='search_bar'
						value={query}
						placeholder='Search...'
						onChange={this.handleInputChange}
					/>
					<FontAwesomeIcon icon='search' className='search_icon' />
				</div>
				{query && <div className='card_loadmore'>Count: {filtered.length}</div>}
				<div className='card-section'>
					{filtered.slice(0, loaded).map((book, index) => {
						return (
							<Card
								key={index}
								book={book}
								handleBookDelete={this.handleBookDelete}
							/>
						)
					})}
				</div>
				{loaded < data.books.length && (
					<div className='card_loadmore' onClick={this.loadMore}>
						load more
					</div>
				)}
				{error && <p className='error-notif'>{error}</p>}
				{success && <p className='success-notif'>{success}</p>}
			</Fragment>
		)
	}
}
export default Home
