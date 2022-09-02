import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/moi.jpg" alt="profil-pic"/>
                    <h4>MAHAVALY Christino Richy</h4>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contacts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                    </li>

                    <li>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter'></i></a>
                    </li>

                    <li>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer"><i className='fab fa-gitlab'></i></a>
                    </li>

                    <li>
                        <a href='https://www.google.com' target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook'></i></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>from ChristinoRichy - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;