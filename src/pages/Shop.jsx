import React from 'react';
import "../index.css";
import "./shop.css";

function Shop() {
    return (
        <>
        <div class="bg-shop"></div>
        <div class="content">
            <h1>Look below to see the latest items in our shop!</h1>
            <p class = "subheading"> A Jolly Good Show Hoodie</p>
            <section class="contents">
                <a href="" title="Get our Hoodie!">
                    <article class="card">
                    <div class="card-content">
                        <img src="placeholder.jpg" alt=""/>
                    </div>
                    </article>
                </a>
                <a href="" title="Get our Hoodie!">
                    <article class="card">
                    <div class="card-content">
                        <img src="placeholder.jpg" alt=""/>
                    </div>
                    </article>
                </a>
            </section>
            <p>Click <a href="https://my-store-c87b67.creator-spring.com/listing/a-jolly-good-show-hoodie">here</a> to shop!</p>
        </div>
        </>
    );
}

export default Shop;