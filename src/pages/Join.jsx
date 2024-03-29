import React from 'react';
import "../index.css";
import "./join.css";

import guide from '../assets/joinonboardingguide.png';
import writing from '../assets/writing.png';

function Join() {
    return (
        <>
        <div class="bg-join"></div>
        <div class="content">
            <section class="jimg">
            </section>
            <section class="jintro">
                <h1>Applications</h1>
                <p>We have many different teams for you to join our cause! Our teams include content creation, art and design, outreach, 
                    editorial, finance, chapters, web development, and events. We have leadership positions as well if you are skilled in that. 
                    Check out our guide to see which positions are open, as well as their responsibilities. The applicaiton link is included in the guide.
                </p>
                    <br/>
                    <a href="https://www.shorturl.at/hRT35">Guide</a>
                        <img src={guide}></img>
            </section>
            <section class="jpartners">
                <h1>Partnerships and Sponsorships</h1>
                <p>Would you like to partner with us? View our partnership guide. Would you like to sponsor our many events? View our sponsoship guide.
                <br/>
                    <a href="https://docs.google.com/document/d/1kGBv1cQDpJnLfaDYxR3_lFiJdEWFxEE4Rqq7FOaGLZQ/edit">Partnership Guide</a>
                    <a href="https://docs.google.com/document/d/1mjHVq2c_9rork1arxWy12FW8aUZTJKY0IvbzVuWenWA/edit">Sponsorship Guide</a>
                </p>
                <div class="row">
                        <img src={writing}></img>
                </div>
            </section>
        </div>
        </>
    );
}

export default Join;