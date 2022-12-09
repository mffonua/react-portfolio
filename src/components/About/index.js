import React from "react";
import selfie from "../../assets/images/miles-f.jpg";


const About = () => {
    return (
        <section className="container pt-4">
            <img src={selfie} className='selfie'></img>
            <h1 className="text-center"> Hello, I'm Miles Fonua </h1>
            <div className="about-text bg-gradient mt-lg-5 mx-lg-5 pt-lg-3 px-lg-5">
                <p className="p-2">
                    I am currently based out of Salt Lake City, Utah working in the Occupation Med. Industry.
                </p>
                <p className="p-2">
                    I am currently enrolled at the U of U Full Stack Coding Bootcamp. This bootcamp is helping me build and refine my JavaScrip, HTML5 and CSS skills that I have learned already through my own studies.
                </p>
                <p className="p-2">
                    Thanks for stopping by and visiting my current Portolio! If you would like to reach out to me, please visit the Contact Section.
                </p>
            </div>
        </section>
    );
};

export default About;