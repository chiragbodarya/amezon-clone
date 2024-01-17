import React from "react";
import "../css/Home.css";
import Hero from "../Assets/Img/heroimg.png";
import Product from "./Product";

import P1 from "../Assets/Img/book.webp";
import P2 from "../Assets/Img/shoes.jpeg";
import P3 from "../Assets/Img/watch.webp";
import P4 from "../Assets/Img/headphone.webp";
import P5 from "../Assets/Img/watch2.webp";
import P6 from "../Assets/Img/bag.jpg";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="hero_container">
                    <img src={Hero} alt="hero-img" className="Home_image" />
                    <div className="home_row">
                        <Product
                            id="1"
                            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, perferendis rerum debitis neque eligendi accusamus tempore minus numquam cum quas."
                            price={20}
                            image={P1}
                            rating={3}
                        />
                        <Product
                            id="2"
                            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                            price={23}
                            image={P2}
                            rating={5}
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id="3"
                            title="Similique, quo. Iusto eum, dolore hic molestiae cupiditate illum aperiam debitis"
                            price={18}
                            image={P3}
                            rating={5}
                        />
                        <Product
                            id="4"
                            title="officia et non quidem totam dicta fugit eaque"
                            price={12}
                            image={P4}
                            rating={5}
                        />
                        <Product
                            id="5"
                            title="Quasi deserunt odit atque! Natus nostrum vel consequuntur aliquid perferendis odit nemo repellendus!"
                            price={10}
                            image={P5}
                            rating={3}
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id="6"
                            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi sint error aperiam delectus nulla dignissimos quis mollitia voluptate quam."
                            price={32}
                            image={P6}
                            rating={4}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
