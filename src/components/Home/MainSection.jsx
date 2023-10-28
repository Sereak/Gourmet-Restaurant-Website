import React from "react";
const MainSection = () => {
    return( 
        <section id="home">
            <div className="MainSection">
                <div className="MainContent">
                    <img src="/images/home.jpg" className="HomeImage"/>
                    <div className="MainHeaderBlock">
                        <h1 className="MainHeader">
                            THIS IS 
                            <br></br>
                            GOURMET
                        </h1>
                        <p className="MainSectionP">
                            Our gourmet burger restaurant offers a mouth-watering 
                            selection of high-quality burgers made with only the 
                            freshest ingredients.
                        </p>
                        <div>
                            <a href="/menu" className="MenuButton"> Go To Menu <i class='bx bxs-right-arrow'></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;