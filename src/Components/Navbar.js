import React, { useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"
import {ProductContext} from "../context";
function Navbar() {
    const {cart} = useContext(ProductContext);

    return (
        <NavWrapper id="nav" className="navbar">
            <Link to="/">
                <span className="navbar-brand"> <img src="img/coolzone.png" alt="logo" width="100" height="100" className="logo"/></span>
            </Link>
                    <ul className="nav_list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                        <span>Home</span> 
                        </Link>
                    </li>

                <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                            <i className="fas fa-shopping-cart"></i>
                            <span>Cart</span> <span style={{ color: "rgba(207, 0, 15, 1)" }}>({cart.reduce((total, amount) => { return total += amount.count }, 0)})</span>
                    </Link>
                </li>
                </ul>
        </NavWrapper>
    )
}
const NavWrapper = styled.nav`
position: absolute;
background: transparent;
display: flex;
justify-content:space-between; 
width: 100%;
height: 5vh;
top: 0px;
z-index:10;
.nav_list {
display: flex;
list-style-type: none;
}

@media (max-width: 960px) {
height: 5vh;
.nav-link {
        font-size: 1.5rem;
    }
    .nav-link:hover{
        font-size: 1.6rem;
    }
}
a:hover{
    transform: scale(1.02);
}

    .nav-link {
        color: #000000 !important;
        font-size: 1.8rem;
        text-transform: capitalize;
        font-weight: 500;
        transition: all hover 1s linear;
    }
    .nav-link:hover{
        font-size: 1.9rem;
        color: #ff00ff !important;
        text-decoration: none;
        font-weight: bolder;
    }
`
export default Navbar