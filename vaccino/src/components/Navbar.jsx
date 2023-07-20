import React from 'react'
import { NavLink } from "react-router-dom"

const links = [
    { label: "HOME", to: "/" },
    { label: "DATABASE", to: "/database" },
    { label: "EDUCATION", to: "/education" },
    { label: "REGULATION", to: "/regulation" },
    { label: "LOGIN", to: "/login" },
    { label: "MAIN", to: "/main" },
    // {label:"", to:"/"},
]


function Navbar() {

    return (
        <>
            <div style={{
                display: "flex", justifyContent: "space-around",
                backgroundColor: "grey", padding: "20px"
            }}>
                {
                    links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            children={l.label}
                            // style={({ isActive }) => isActive ? activeStyle : defaultStyle}
                            style={({ isActive }) => isActive ? { color: 'red' } : { color: 'black' }}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Navbar