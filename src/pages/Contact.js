import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Amiens</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0640213602">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !');}}>06 40 21 36 02</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <CopyToClipboard text="demazureetienne@gmail.com">
                                <span className="clickInput" onClick={() => { alert('E-mail copié !');}}>demazureetienne@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/etienne-demazure" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Demzito" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        {/* <a href="https://twitter.com/Demzito" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a> */}
                        <a href="mailto:demazureetienne@gmail.com" target="_blank" rel="noopener noreferrer">
                            <h4>Google</h4>
                            <i className="fab fa-google"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;