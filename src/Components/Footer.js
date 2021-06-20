import React from 'react'

function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <i className="fab fa-delicious footer-logo "></i><span className="footer-logo">Cool Zone</span>
                        <p className="text-left">Bringing together the best of skate culture and street fashion.</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Features</h3>
                        <p>Skaters</p>
                        <p>Street Fashion</p>
                        <p>Cool Stuffs</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick Contact</h3>
                        <p><i className="fas fa-phone-square footer-icon"></i>+1 987 654 321</p>
                        <p><i className="fas fa-envelope footer-icon"></i>contact@coolzone.com</p>

                    </div>
                    <div className="col-md-3">
                        <h3>Follow Us </h3>
                        <p><i className="fab fa-facebook-f footer-icon"></i>Facebook</p>
                        <p><i className="fab fa-youtube footer-icon"></i>Youtube</p>
                        <p><i className="fab fa-linkedin footer-icon"></i>Linkedin</p>
                        <p><i className="fab fa-twitter footer-icon"></i>Twitter</p>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Footer