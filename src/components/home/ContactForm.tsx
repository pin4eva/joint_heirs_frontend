"use client";
import React, { useState } from "react";

interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormErrors {
	name?: string;
	email?: string;
	phone?: string;
	subject?: string;
	message?: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const validateForm = (): boolean => {
		const newErrors: ContactFormErrors = {};

		// Name validation
		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		} else if (formData.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters";
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		// Phone validation (optional but if provided, must be valid)
		if (formData.phone.trim()) {
			const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
			if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
				newErrors.phone = "Please enter a valid phone number";
			}
		}

		// Subject validation
		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		} else if (formData.subject.trim().length < 3) {
			newErrors.subject = "Subject must be at least 3 characters";
		}

		// Message validation
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error when user starts typing
		if (errors[name as keyof ContactFormErrors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Here you would normally send the data to your backend
			console.log("Form submitted:", formData);

			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="contact-form-container">
			<div className="contact-form-wrapper">
				<div className="contact-form-header">
					<h2 className="contact-form-title">Send Us a Message</h2>
					<p className="contact-form-subtitle">
						We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as
						possible.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="contact-form">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="name" className="form-label">
								Full Name <span className="required">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								className={`form-input ${errors.name ? "error" : ""}`}
								placeholder="Enter your full name"
							/>
							{errors.name && <span className="error-message">{errors.name}</span>}
						</div>

						<div className="form-group">
							<label htmlFor="email" className="form-label">
								Email Address <span className="required">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className={`form-input ${errors.email ? "error" : ""}`}
								placeholder="Enter your email address"
							/>
							{errors.email && <span className="error-message">{errors.email}</span>}
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label htmlFor="phone" className="form-label">
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								className={`form-input ${errors.phone ? "error" : ""}`}
								placeholder="Enter your phone number"
							/>
							{errors.phone && <span className="error-message">{errors.phone}</span>}
						</div>

						<div className="form-group">
							<label htmlFor="subject" className="form-label">
								Subject <span className="required">*</span>
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleInputChange}
								className={`form-input ${errors.subject ? "error" : ""}`}
								placeholder="Enter message subject"
							/>
							{errors.subject && <span className="error-message">{errors.subject}</span>}
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="message" className="form-label">
							Message <span className="required">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							className={`form-textarea ${errors.message ? "error" : ""}`}
							placeholder="Enter your message"
							rows={6}
						/>
						{errors.message && <span className="error-message">{errors.message}</span>}
					</div>

					{submitStatus === "success" && (
						<div className="success-message">
							<i className="fas fa-check-circle"></i>
							Thank you for your message! We&apos;ll get back to you soon.
						</div>
					)}

					{submitStatus === "error" && (
						<div className="error-message-global">
							<i className="fas fa-exclamation-circle"></i>
							Sorry, something went wrong. Please try again later.
						</div>
					)}

					<button
						type="submit"
						disabled={isSubmitting}
						className={`form-submit-btn ${isSubmitting ? "submitting" : ""}`}
					>
						{isSubmitting ? (
							<>
								<i className="fas fa-spinner fa-spin"></i>
								Sending...
							</>
						) : (
							<>
								<i className="fas fa-paper-plane"></i>
								Send Message
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
