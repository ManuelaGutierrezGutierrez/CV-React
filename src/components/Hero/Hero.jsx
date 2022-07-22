import React from "react";
import { CV } from "../../CV/CV";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const { hero, aboutMe } = CV;

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__container1">
				<img className="hero__img" src={hero.image} alt="profile" />
			</div>
			<div className="hero__container2">
				<div className="hero__title">
					<h1>Bienvenidos!</h1>
				</div>
				<div className="hero__card">
					<h2>
						{hero.firstName} {hero.lastName}
					</h2>
					<h3>{hero.job}</h3>
					<p>
						{hero.city} {hero.birthDate}
					</p>
					{aboutMe.map((item) => {
						return <p className="about-me">{item.info}</p>;
					})}
					<div className="hero__links">
						<a href={hero.linkedin}>
							<FontAwesomeIcon icon={faLinkedin} className="icon" />
							Linkedin
						</a>
						<a href={hero.gitHub}>
							<FontAwesomeIcon icon={faGithub} className="icon" />
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
