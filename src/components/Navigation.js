import React from 'react';
import { NavLink } from 'react-router-dom';
import Media from '../media/profile.jpg';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={Media} alt="profil-pic"/>
                    <h3>Etienne Demazure</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "navActive" : "" } end to="/react-cv/">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "navActive" : "" } end to="/competences">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "navActive" : "" }  end to="/portfolio">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "navActive" : "" }  end to="/contact">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/etienne-demazure" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/Demzito" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    {/* <li>
                        <a href="https://twitter.com/Demzito" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li> */}
                    <li>
                        <a href="mailto:demazureetienne@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Etienne Demazure - 2022</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;