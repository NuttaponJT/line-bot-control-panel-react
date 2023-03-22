/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import "./LeftMenuBar.css";
import PropTypes from 'prop-types';

const LeftMenuBar = (props) => {
    const mappingMenus = {
        "Home": [
            "Submenu Home 1", 
            "Submenu Home 2", 
            "Submenu Home 3", 
            "Submenu Home 4", 
        ], 
        "Push Events": [
            "Submenu Push Events 1", 
            "Submenu Push Events 2", 
            "Submenu Push Events 3", 
            "Submenu Push Events 4", 
        ], 
        "Custom Auto Reply": [
            "Submenu Custom Auto Reply 1", 
            "Submenu Custom Auto Reply 2", 
            "Submenu Custom Auto Reply 3", 
            "Submenu Custom Auto Reply 4", 
        ], 
    }

    return (
        <>
            <div class="left-menu-bar">
                {mappingMenus[props.activeTabProp.activeTab].map((subMenu) => {
                    return (
                        <li class="left-sub-menu">{subMenu}</li>
                    )
                })}
            </div>
        </>
    );
}

LeftMenuBar.propTypes = {
    activeTabProp: PropTypes.object.isRequired, 
}

export default LeftMenuBar;
