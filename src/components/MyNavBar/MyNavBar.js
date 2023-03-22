/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import './MyNavBar.css';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import PropTypes from 'prop-types';

const MyNavBar = (props) => {
    // const [activeTab, setactiveTab] = useState("Home");

    const mainMenus = ["Home", "Push Events", "Custom Auto Reply"];

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
            <NavbarCollapse id="responsive-navbar-nav">
                <Nav>
                    {mainMenus.map((menuName) => {
                        const isActive = `${menuName === props.activeTabProp.activeTab ? 'active' : ''}`;

                        const handleClickNavLink = (event) => {
                            props.activeTabProp.setactiveTab(menuName);
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

MyNavBar.propTypes = {
    activeTabProp: PropTypes.object.isRequired, 
}

export default MyNavBar;
