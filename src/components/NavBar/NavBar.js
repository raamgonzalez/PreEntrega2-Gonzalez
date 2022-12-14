import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Counter from '../Counter/Counter'
import './NavBar.css'

const NavBar = () => {
	return (
	<nav className="nav flex flex-row justify-between p-4 mx-64 border-b border-gray-400">
		<div className="nav_div--title" id="brand ">
			<a href='#'><img src='../logo.svg' alt='Logo de tecnophill' className='w-32 h-16'></img></a>
			{/* <h1 className="title text-3xl text-slate-300 underline">tecnophil</h1> */}
		</div>
		<ul className="nav__list flex flex-row gap-4 my-auto" >
			{/* <li className="nav__link text-slate-300 py-2 rounded-lg mr-32"><a href="#">Home</a></li> */}
			<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><a href="#">Moviles</a></li>
			<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><a href="#">TV & AV</a></li>
			<li className="nav__link text-slate-300 py-2 rounded-lg text-lg"><a href="#">Notebooks</a></li>
			<CartWidget/>
			<Counter/>
		</ul>
	</nav>
	)
}

export default NavBar