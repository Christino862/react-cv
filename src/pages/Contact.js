import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'> 
            <Navigation/>
            <div className='contactContent'>
                <div className='header'>
                    
                    
                </div>
                <div className='contactBox'>
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span> Bordeaux</span>
                            </li>
                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text='+261349242450'>
                                    <span className='clickInput' onClick={() => {alert('Téléphone copié !');}}>+26134 92 424 50</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className='fas fa-envelope'></i>
                                <CopyToClipboard text='tojoherytafitasoa@gmail.com'>
                                    <span className='clickInput' onClick={() => {alert('E-mail copié !');}}>toljahemmanuel@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                            
                        </ul>
                
                    </div>
                <div className='socialNetwork'>
                        <ul>
                            <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                                <h4>LinkedIn</h4>
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                                <h4>Twitter</h4>
                                <i className='fab fa-twitter'></i>
                            </a>
                            <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                                <h4>Gitlab</h4>
                                <i className='fab fa-gitlab'></i>
                            </a>
                            <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                                <h4>Facebook</h4>
                                <i className='fab fa-facebook'></i>
                            </a>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Contact;