import React from "react";
import { CV } from "../../CV/CV";
import "./Works.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const { works } = CV;

const Works = () => {
	return (
		<div className="works">
			{works.map((item) => {
				return (
					<div className="works__container" key={JSON.stringify(item)}>
						<div className="works__card">
							<figure>
								<img src={item.image} alt="project" />
							</figure>
							<div className="works__data">
								<h3>{item.name}</h3>
								<p>{item.tools}</p>

								<a href={item.url}>
									<FontAwesomeIcon icon={faGithub} className="icon" />
									Github
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Works;
