import React from "react";
import selfie from "../../assets/images/miles-f.jpg";


const About = () => {
    return (
        <section className="container">
            <h1 className="text-center"> Hello, I'm Miles Fonua </h1>
            <img src={selfie} className='selfie'></img>
            <article className="bg-transparent bg-gradient mt-5 mx-5 pt-3 px-5">
                <p className="p-2">
                    I am currently based out of Salt Lake City, Utah working in the Occupation Med. Industry.
                </p>
                <p className="p-2">
                    I am currently enrolled at the U of U Full Stack Coding Bootcamp. This bootcamp is helping me build and refine my JavaScrip, HTML5 and CSS skills that I have learned already through my own studies.
                </p>
                <p className="p-2">
                    Thanks for stopping by and visiting my current Portolio! If you would like to reach out to me, please visit the Contact Section.
                </p>
            </article>
        </section>
    );
};

export default About;