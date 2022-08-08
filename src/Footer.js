import React from "react";



const Footer = () => {
    return (
      <article className="card">
      <footer className="footer w-100 mx-auto">
        <div>
        <h4>Delivery Locations</h4>
      </div>
      <div>
        <h4>Payment Options</h4>
      </div>
      <div>
        <h4>Contact Us</h4>
      </div>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="http://linkedin.com">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://whatsapp.com">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://facebook.com">
                    <i className="fab fa-facebook"></i>
                </a>
            </li>
    
        </ul>
    </footer>
    
    </article>
    )
}

export default Footer;