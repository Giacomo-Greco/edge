import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from "../../media/icons/logo.png";


function Logo() {
    return (
        <>
            <div className="flex pointer d-w100 border-box" style={{padding: '5px'}}>         
                <img className="logo" src={logo} style={{width: '100%', height: 'auto'}}></img>
            </div>
        </>
    )
}

function Menu() {

    const menu = [
        {
            title: 'uno',
            link: 'uno',
            icon: {}
        },
        {
            title: 'due',
            link: 'due',
            icon: {}
        },
        {
            title: 'tre',
            link: 'tre',
            icon: {}
        },
        {
            title: 'quattro',
            link: 'quattro',
            icon: {}
        },
    ]

    return (
        <>
        <div className="flex-column x-a y-a d-w100 m-hide pointer" style={{gap: '7px'}}>
        {
            menu.map((page, index) => {
                    return (
                        <div className="flex x-a y-a nav-hover" key={index} to={"/" + page.link} style={{width: '80%', minHeight: '55px', height: 'auto', borderRadius: '10px'}}>
                            <h3 className="color-white">{index}</h3>
                        </div>
                )
            })
        }
            
        
        </div>
        </>
    )
}

function Navbar() {

        return (
            <>  
                <div className="flex-column fixed y-a" style={{height: '100vh', width: '70px', backgroundColor: 'var(--color2)', gap: '30px', paddingTop: '10px'}}>
                    <Logo />  
                    <Menu /> 
                </div>
            </>
        )
}

export default Navbar;