import React from 'react';
import CartWidget from './CartWidget';
import logo from '../consola.svg';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">                
                <img src={logo} alt="" width="50" height="40" class="d-inline-block align-text-top"/>    
                <a class="navbar-brand" href="#">Tito´s Games</a>                        
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Xbox</a>
                        <a class="nav-link" href="#">Play Station</a>
                        <a class="nav-link" href="#">Nintendo</a>
                    </div>
                </div>
                <CartWidget/>
            </div>           
        </nav>      
    )
}
export default NavBar;