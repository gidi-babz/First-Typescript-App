import React, { useState, useEffect } from 'react';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`${isScrolled && 'bg-gray-400'}`}>
			<div className="text-3xl font-semibold text-blue-500 pb-2 cursor-pointer">
				Our Logo
			</div>

			<ul className="flex space-x-8 ">
				<li className="nav-link">Home</li>
				<li className="nav-link">About</li>
				<li className="nav-link">Contact</li>
				<li className="nav-link">Docs</li>
			</ul>

			<div className="space-x-4 mr-4">
				<a className="nav-btn">Login</a>
				<a className="nav-btn">Logout</a>
			</div>
		</nav>
	);
};

export default Navbar;
