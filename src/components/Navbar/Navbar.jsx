import React from "react";
import "./Navbar.scss";

import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import BurgerButton from "../BurgerButton/BurgerButton";
import Hero from "../Hero/Hero";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

function Navbar() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};
	return (
		<>
			<div className="navbar">
				<div className={`links ${clicked ? "active" : " "} `}>
					<Link to="/">Home</Link>
					<Link to="/education">Estudios</Link>
					<Link to="/experience">Experiencia</Link>
					<Link to="/works">Proyectos</Link>
					<Link to="/contact">Contactar</Link>
				</div>
				<div className="burger">
					<BurgerButton clicked={clicked} handleClick={handleClick} />
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/education" element={<Education />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/works" element={<Works />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default Navbar;
