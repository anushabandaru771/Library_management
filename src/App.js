import React, { Fragment, Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home'
import './styles/main.css'

library.add(faSearch)

class App extends Component {
	render() {
		return (
			<div  className="Geeks">
			<Fragment>
			
				{/* Header */}
				<a href='/' style={{ textDecoration: 'none' }}>
					<h1 className='header'>LIBRARY MANAGEMENT SYSTEM </h1>
				</a>
				<Home />
			</Fragment>
			</div>
		)
	}
}

export default App
