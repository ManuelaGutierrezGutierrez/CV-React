import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.scss";

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_opa1uyt",
				"template_8cwqzp5",
				form.current,
				"f7ZduCdtpzoQe_jAr"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		Swal.fire("Mensaje enviado");
	};

	return (
		<div className="contact">
			<form ref={form} onSubmit={sendEmail} className="contact__card">
				<label>Nombre</label>
				<input type="text" name="user_name" />
				<label>Asunto</label>
				<input type="text" name="user_subject" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Mensaje</label>
				<textarea name="message" />
				<div className="contact__button">
					<button type="submit" value="Send">
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
