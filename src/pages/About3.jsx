import React from 'react'
import Card3 from '../components/aboutCard3/Card3'
import Pic1 from "../assets/about3a.png"

const About3 = () => {
    return (
        <div className="about-section-3">
            <div className="container-xxl">
                <div className="about-img">
                    <img src={Pic1} alt="Pic" />
                </div>

                <div className="about3Container">
                    <Card3 />
                </div>


            </div>
        </div>
    )
}

export default About3