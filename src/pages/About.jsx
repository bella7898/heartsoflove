import React from 'react';
import "../index.css";

function About() {
    return (
        <div class="content">
            <section class="aimg">
                <h1>About</h1>
            </section>
            <section class="aintro">
            <img src="/assets/about.png" alt="About Us Image"/>
                <h1 style={{ color: '#a42430' }}>Our mission:</h1>
                <p>We are an organization striving to assist those in need of help to ensure comfort and consolation in relation to those who are disadvantaged.
                    Especially due to the Covid-19 pandemic, many civillians are in despair and are requesting for financial aid as well as other methods of support.
                    We aim to help those who are homeless, disadvantaged, or inconvenienced in order to achieve a well ordered society. By doing so, we can establish a superior lifestyle and provide shelter,
                    food, and other necessities with the aid of fundraisers, charity programs, and informational posts.
                </p>
                <img src="placeholder.jpg" alt = "Mission Image 1"></img>
                <img src="placeholder.jpg" alt = "Mission Image 2"></img>
                <img src="placeholder.jpg" alt = "Mission Image 3"></img>
                <img src="placeholder.jpg" alt = "Mission Image 4"></img>
            </section>
            <section class="avalues">
                <h1 style={{ color: '#a42430' }}>Our values:</h1>
                <p>We strongly value our team members as well as supporters, as our #1 goal is to restore kindness and encourage others to reach out to those in need of help.
                    We firmly believe that achieving equality is essential and we can do so by supplying various resources to those who have been put into a disadvantage. From this, 
                    we can gain goodwill throughout all of society, securing our true goal of selflessness and sympathy.
                </p>
            </section>
            <section class="ameet">
                <h1 style={{ color: '#a42430' }}>Meet the Team:</h1>
                <p>Here are the people at Hearts of Love:
                </p>
            </section>
            <section class="apositions">
                <h1 style={{ color: '#a42430' }}>Open positions:</h1>
                <p>Are you interested in initiating a new chapter and gaining leadership? If so, 
                    look into this link to get more details for beginning a chapter!
                </p>
                <a href="https://docs.google.com/document/d/13L6dgCqwFmRD5GCJOMAYO7LhyiEDE087cLMdARDtDCo/edit">Link</a>
            </section>
            <section class="aevents">
                <h1 style={{ color: '#a42430' }}>Events</h1>
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a>
            </section>
        </div>
    );
}

export default About;
