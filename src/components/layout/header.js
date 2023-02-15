import React, { useState, Component} from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

function Header() {
        
        return(
            <div className="titleBar flex-column white fixed" style={{boxSizing: 'border-box', paddingLeft: '35px', width: '100%', height: '90px', borderBottom: '1px solid var(--border--color)', zIndex: '50'}}>
                <div className="flex-column x-a" style={{width: '100%', height: '100%', justifyContent: 'center', gap: '3px'}}>
                    <h3 className="user-select">HIV Data Research</h3>
                    <h4 className="light pointer"> 15/02/2022 · Edge Consulting</h4>
                </div>
            </div>
        )
}

export default Header;