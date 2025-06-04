/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { navList } from "./HeaderComp";

const FooterComp = () => {
	return (
		<footer className="modern-footer">
			{/* Newsletter Section */}
			<section className="footer-newsletter">
				<div className="container-modern">
					<div className="newsletter-content">
						<div className="newsletter-text">
							<h2>Stay Connected</h2>
							<p>Subscribe to our newsletter for the latest updates, sermons, and events</p>
						</div>
						<form className="newsletter-form">
							<div className="input-group">
								<input
									type="email"
									placeholder="Enter your email address"
									className="newsletter-input"
									required
								/>
								<button type="submit" className="newsletter-btn">
									<i className="fa-solid fa-paper-plane"></i>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Main Footer Content */}
			<div className="footer-main-section">
				<div className="container-modern">
					<div className="footer-grid">
						{/* Church Info */}
						<div className="footer-column church-info">
							<div className="church-logo">
								<img src="/images/logo.png" alt="Joint Heirs Assembly Logo" />
								<div className="church-name">
									<h3>Joint Heirs Assembly</h3>
									<span>International</span>
								</div>
							</div>
							<p className="church-description">
								A community of believers united in faith, worship, and service, dedicated to
								spreading the Gospel and building God&apos;s kingdom on earth.
							</p>
							<div className="contact-info">
								<div className="contact-item">
									<i className="fa-solid fa-location-dot"></i>
									<span>123 Faith Street, City, State 12345</span>
								</div>
								<div className="contact-item">
									<i className="fa-solid fa-phone"></i>
									<span>+1 (555) 123-4567</span>
								</div>
								<div className="contact-item">
									<i className="fa-solid fa-envelope"></i>
									<span>info@jointheirsassembly.org</span>
								</div>
							</div>
						</div>

						{/* Navigation Links */}
						<div className="footer-column">
							<h4>Quick Links</h4>
							<ul className="footer-nav">
								{Array.isArray(navList) && navList.length > 0 ? (
									navList.map((nav, i) => (
										<li key={i}>
											<Link href={nav.link} className="footer-link">
												{nav.name}
											</Link>
										</li>
									))
								) : (
									<>
										<li>
											<Link href="/" className="footer-link">
												Home
											</Link>
										</li>
										<li>
											<Link href="/about" className="footer-link">
												About
											</Link>
										</li>
										<li>
											<Link href="/sermons" className="footer-link">
												Sermons
											</Link>
										</li>
										<li>
											<Link href="/events" className="footer-link">
												Events
											</Link>
										</li>
										<li>
											<Link href="/contact" className="footer-link">
												Contact
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>

						{/* Services & Ministries */}
						<div className="footer-column">
							<h4>Ministries</h4>
							<ul className="footer-nav">
								<li>
									<Link href="/youth" className="footer-link">
										Youth Ministry
									</Link>
								</li>
								<li>
									<Link href="/children" className="footer-link">
										Children&apos;s Ministry
									</Link>
								</li>
								<li>
									<Link href="/worship" className="footer-link">
										Worship Team
									</Link>
								</li>
								<li>
									<Link href="/outreach" className="footer-link">
										Community Outreach
									</Link>
								</li>
								<li>
									<Link href="/bible-study" className="footer-link">
										Bible Study
									</Link>
								</li>
							</ul>
						</div>

						{/* Connect & Support */}
						<div className="footer-column">
							<h4>Connect With Us</h4>
							<div className="footer-actions">
								<Link href="/prayer-request" className="action-btn prayer">
									<i className="fa-solid fa-hands-praying"></i>
									Prayer Request
								</Link>
								<Link href="/bible-reading" className="action-btn bible">
									<i className="fa-solid fa-book-bible"></i>
									Bible Reading
								</Link>
								<Link href="/testimony" className="action-btn testimony">
									<i className="fa-solid fa-heart"></i>
									Share Testimony
								</Link>
								<Link href="/donate" className="action-btn donate">
									<i className="fa-solid fa-hand-holding-heart"></i>
									Give Online
								</Link>
							</div>

							{/* Social Media */}
							<div className="social-section">
								<h5>Follow Us</h5>
								<div className="social-links">
									<Link
										href="https://facebook.com"
										className="social-link facebook"
										target="_blank"
									>
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
									<Link href="https://twitter.com" className="social-link twitter" target="_blank">
										<i className="fa-brands fa-twitter"></i>
									</Link>
									<Link
										href="https://instagram.com"
										className="social-link instagram"
										target="_blank"
									>
										<i className="fa-brands fa-instagram"></i>
									</Link>
									<Link href="https://youtube.com" className="social-link youtube" target="_blank">
										<i className="fa-brands fa-youtube"></i>
									</Link>
									<Link
										href="https://linkedin.com"
										className="social-link linkedin"
										target="_blank"
									>
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="footer-bottom">
				<div className="container-modern">
					<div className="footer-bottom-content">
						<div className="copyright">
							<p>
								&copy; {new Date().getFullYear()} Joint Heirs Assembly International. All Rights
								Reserved.
							</p>
						</div>
						<div className="footer-bottom-links">
							<Link href="/privacy" className="bottom-link">
								Privacy Policy
							</Link>
							<Link href="/terms" className="bottom-link">
								Terms of Service
							</Link>
							<Link href="/sitemap" className="bottom-link">
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;
