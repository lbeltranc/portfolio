import React from 'react';

const Contact = () => {

    return (
        <section className="contact" id="contact">
            <h2>Let's get in touch</h2>
            <div className="social-media">
                <div className="icon-cont mail"><a href="mailto:lbeltranc0126@gmail.com" target="_blank"><i className="fas fa-at icon"></i></a></div>
                <div className="icon-cont linkedin"><a href="https://linkedin.com/in/laurabeltranc" target="_blank"><i className="fab fa-linkedin-in icon"></i></a></div>
                <div className="icon-cont github-me"><a href="https://github.com/lbeltranc" target="_blank"><i className="fab fa-github icon"></i></a></div>
            </div>
        </section>
    );
}

export default Contact;