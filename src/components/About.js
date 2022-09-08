import React, { useState, useEffect } from "react";

export default function About() {

    const [width, setWindowWidth] = useState(0)

    

    return (
        <section id="about" className="section-small thirsty_branding">
            <div className="container" >
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 abouttext" style={{display: 'flex', alignItems: 'center'}}>
                        <div className="column" style={{padding: '30px'}}>  
                            <img src={require('../images/Connect-Logo-top.png')} className="img-responsive" alt="we good"></img>
                            <p className="no-pad">
                                <br />
                                Hungry for socializing? <br></br>
                                Sit back &amp; sip a cup of coffee with us. We are crazy kickass brain boxes doing everything unless you want to see magic tricks done by pasha. Jokes apart! We are the ones who breathe amongst common people, understand them and come out with uncommon ideas to make your brand stand out. We are a plethora of ideas, delivering impactful tailor-made strategies and eye-catchy imagery every now and often.
                            </p>
                            <a href="#" className="btn btn-brand btn-xs">Read more</a>
                        </div>
                        <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-7 col-md-7 col-sm-12 aboutimg wow zoomIn thirsty_branding_img">
                            <img src={require('../images/bean1.png')} alt="" className="img-responsive center-block img-left"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}