import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>

                <li>
                    <NavLink activeStyle={{color: "red"}} to='/countrieslist' >CountriesList</NavLink>
                </li>

                <li>
                    <NavLink activeStyle={{color: "red"}} to='/countriesdetails' >CountriesDetails</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;