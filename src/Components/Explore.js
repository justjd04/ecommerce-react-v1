import React from 'react';
function Explore() {
    return (
        <React.Fragment>
        <div id="parallax">
        <div className="container-fluid text-justify p-5">
            <div className="col-12  ml-5 subscribe">
                    <h1>Subscribe to get discount coupons & new offers!</h1>
                    <p className="subscribe-subtext">Earn 25% off the latest styles and trends if you join our email list. </p>
             <input className="subscribe-input" placeholder="Enter your email" type="email" name="email" id="email"/> <button className="subscribe-btn text-center"> SUBSCRIBE  </button>
            </div>
        </div>
        </div>
            <p className="explore text-center pt-5">More to Explore!</p>
        <div className="container-fluid">
            <div className="row explore-row">
                <div className="col-4 card">
                        <img src="https://images.pexels.com/photos/822509/pexels-photo-822509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="news" className="card-img-top img-1 img-fluid mt-3"/>
                    <div className="card-footer">
                        <p className=" blog-cat mb-0 text-muted"><strong>UNDERGROUND</strong></p>
                        <p className="blog-par">Bringing together the best of skate culture and street fashion.</p>
                    </div>
                </div>
                    <div className="col-4 card">
                        <img src="https://images.pexels.com/photos/457496/pexels-photo-457496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="news" className="card-img-top img-fluid mt-3" />
                    <div className="card-footer">
                        <p className=" blog-cat mb-0 text-muted"><strong>UNBOTHERED</strong></p>
                        <p className="blog-par">Bringing together the best of skate culture and street fashion.</p>
                    </div>
                </div>
                    <div className="col-4 card">
                        <img src="https://images.pexels.com/photos/4929029/pexels-photo-4929029.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="news" className="card-img-top img-fluid mt-3 " />
                    <div className="card-footer">
                        <p className=" blog-cat text-muted mb-0"><strong>EASY GOING</strong></p>
                        <p className="blog-par">Bringing together the best of skate culture and street fashion.</p>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Explore