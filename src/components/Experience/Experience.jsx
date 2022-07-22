import React from "react";
import { CV } from "../../CV/CV";
import "./Experience.scss";

const { experience } = CV;

const Experience = () => {
	return (
		<div className="experience">
			{experience.map((item) => {
				return (
					<div className="experience__container" key={JSON.stringify(item)}>
						<div className="experience__card">
							<h3>{item.name}</h3>
							<p>{item.date}</p>
							<p>{item.where}</p>
							<p>{item.description}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Experience;
