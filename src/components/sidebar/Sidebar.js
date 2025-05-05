import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import chessLogo from '../../assets/chesscomlogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.querySelector('.sidebar');
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            
            if (sidebar && hamburgerMenu && 
                !sidebar.contains(event.target) && 
                !hamburgerMenu.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button className="hamburger-menu" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
            </button>
            
            <div 
                className={`overlay ${sidebarOpen ? 'active' : ''}`} 
                onClick={toggleSidebar}
            ></div>
            
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className='sidebar-header'>
                    <img src={chessLogo} alt='Logo' className='logo' /> 
                </div>
                <div className='sidebar-menu'>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faChessPawn} className='Icons' id='play-icon'/>
                            <a href="#">Play</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPuzzlePiece} className='Icons' id = 'puzzle-piece'/>
                            <a href="#">Puzzles</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGraduationCap} className='Icons' id = 'learn-icon'/>
                            <a href="#">Learn</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBinoculars} className='Icons' id ='watch-icon'/>
                            <a href="#">Watch</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faNewspaper} className='Icons' id='news-icon'/>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPeopleArrows} className='Icons' id = 'social-icon' />
                            <a href="#">Social</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInfo} className='Icons' id = 'more-icon'/>
                            <a href="#" id='more-href'>More</a>
                        </li>                
                    </ul>
                </div>
                <div className='sidebar-footer'>
                    <button className='sign-up-btn'>Sign Up</button>
                    <button className='log-in-btn'>Log In</button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;