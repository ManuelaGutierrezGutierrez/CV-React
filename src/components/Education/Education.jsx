import { CV } from "../../CV/CV";
import "./Education.scss";

const { education } = CV;

const Education = () => {
	return (
		<div className="education">
			{education.map((item) => {
				return (
					<div className="education__container" key={JSON.stringify(item)}>
						<div className="education__card">
							<div className="education__data">
								<h3>{item.name}</h3>
								<p>{item.date}</p>
								<p>{item.where}</p>

								<figure>
									<img src={item.image} alt="logo" />
								</figure>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Education;
