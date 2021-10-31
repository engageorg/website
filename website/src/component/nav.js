import React from 'react';

function nav() {
    return ( 
        <div data-scroll-section>
            <nav class="navbar">
                <ul>
                    <img class="company-logo "src="https://www.eppisai.com/static/media/logo_light.4875494a.svg" alt="logo"/>
                    <li>About</li>  
                    <li>Explore</li>
                    <li>Resources</li> 
                    <li>Pricing</li>
                    <button class = "hire-button">We're hiring great people like you</button>
                </ul>
            </nav>
        </div>
     );
}

export default nav;