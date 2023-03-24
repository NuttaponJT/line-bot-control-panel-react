/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import "./LeftMenuBar.css";
import PropTypes from 'prop-types';

const LeftMenuBar = (props) => {
    const mappingMenus = {
        "Home": [
            {link: "/", subject: "Home"}, 
            // {link: "/", subject: "Submenu Home 2"}, 
            // {link: "/", subject: "Submenu Home 3"}, 
            // {link: "/", subject: "Submenu Home 4"}, 
        ], 
        "Push Events": [
            {link: "/push-event", subject: "Main"}, 
            // {link: "/", subject: "Submenu Push Events 2"}, 
            // {link: "/", subject: "Submenu Push Events 3"}, 
            // {link: "/", subject: "Submenu Push Events 4"}, 
        ], 
        "Custom Auto Reply": [
            {link: "/", subject: "Submenu Custom Auto Reply 1"}, 
            {link: "/", subject: "Submenu Custom Auto Reply 2"}, 
            {link: "/", subject: "Submenu Custom Auto Reply 3"}, 
            {link: "/", subject: "Submenu Custom Auto Reply 4"}, 
            {link: "/", subject: "Submenu Custom Auto Reply 5"}, 
        ], 
    }

    return (
        <>
            <div class="left-menu-bar">
                {mappingMenus[props.activeTabProp.activeTab].map((subMenu) => {
                    return (
                        <Link to={`${props.legacyUrl}${subMenu.link}`} className="no-link-looking"><li class="left-sub-menu">{subMenu.subject}</li></Link>
                    )
                })}
            </div>
            <div class="right-content-plain">
                <Outlet />
            </div>
        </>
    );
}

LeftMenuBar.propTypes = {
    activeTabProp: PropTypes.object.isRequired, 
}

export default LeftMenuBar;
