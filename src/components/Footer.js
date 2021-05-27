import React from "react";
function Footer() {
    return(
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}> 
            <div className="row py-5">
                <div className="col-12">
                    <h1 style={{color: "antiquewhite" }}>interested in working with me?</h1>
                    <button className="btn btn-outline-light btn-lg ">let's talk!</button>
<br />
<br />
                    <div className="row">
                        <div className="col-12 col-md-4 ">
                            
                            <h5 className="text-info ">More Links</h5>
                            <a className="text-light" href="/" >Blogs</a>
                            <br/>
                            <a className="text-light " href="/" >Home</a>
                            <br/>
                            <a className="text-light " href="/" >Contact me</a>
                            <br/>
                            <a className="text-light"  href="/">Write a recommendation
                            <i className="fas fa-heart text-light"></i>
                            </a>
                        </div>
                        
                        
                        <div className="col-12 col-md-4 text-justify "> 
                            
                            <p style={{color: "whitesmoke"}}>An engineer is a person who invents or builds something having in mind the limits of its cost, safety and regulation. Engineers are professionals in their field. It is derived from a Latin or Greek word ingeniare which means to create or devise something. Its standard education is 4 year of bachelors.</p>
                        </div>

                        <div className="col-12 col-md-4   ">
                            <h5 className="text-info">Social</h5>
                            <a href="/">
                                <i className="fab fa-linkedin text-light h1 d-block"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-github-square text-light h1 d-block"></i>

                            </a>
                            <a href="/">
                                <i className="fas fa-envelope text-light h1 d-block"></i>
                            </a>
                
                        </div>
                
                        <div className="row">
                            <div className="col-12">
                                <p className="text-muted">Copyright
                                 <i className="fas fa-copyright"></i>
                               Vijay Iyer
                             </p>
                                
         
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        
    </footer>

    );
}

export default Footer;