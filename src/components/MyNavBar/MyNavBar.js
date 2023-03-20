/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import './MyNavBar.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const MyNavBar = () => {
    const [activeTab, setactiveTab] = useState("Home");

    const mainMenus = ["Home", "Push Events", "Custom Auto Reply"];

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
            <NavbarCollapse id="responsive-navbar-nav">
                <Nav>
                    {mainMenus.map((menuName) => {
                        const isActive = `${menuName === activeTab ? 'active' : ''}`;

                        const handleClickNavLink = (event) => {
                            setactiveTab(menuName);
                        };

                        return (
                            <NavLink className={isActive} onClick={handleClickNavLink}>{menuName}</NavLink>
                        )
                    })}
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
}

export default MyNavBar;
