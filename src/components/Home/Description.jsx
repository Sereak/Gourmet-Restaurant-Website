const Description = () => {
    return(
        <section id="about">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
               <div className="Description">
                    <div className="DescriptionContainer">

                        <div className="DescriptionImageContainer">
                            <img src="/images/about/about.jpg"/>
                        </div>

                        <div className="DescriptionTextContainer">
                            <h1>Gourmet Burgers & Glizzys</h1>
                            <h2>
                                At our gourmet burger restaurant, we pride ourselves on using only 
                                the freshest and highest quality ingredients to create unique and 
                                delicious burgers that satisfy every palate. We strive to create 
                                a welcoming atmosphere where our guests can enjoy great food and 
                                drinks with their friends and family. With excellent service and 
                                a commitment to excellence, we guarantee that every visit to our 
                                restaurant will be an unforgettable experience for all.
                            </h2>

                            <p className="Times">
                                <span>Location: </span>1428 N Genesee Ave, Los Angeles, CA 90046
                                <br></br>
                                <span>Mon-Fri: </span>12 PM - 10 AM
                                <br></br>
                                <span>Sat-Sun: </span>12 PM - 12 AM 
                            </p>
                            
                            <p className="DoorDash">*Online orders only available on DoorDash*</p>

                            <div className="DescriptionOrderButton">
                                <a href="https://www.doordash.com/" className="OrderButton"> Order now <i class='bx bxs-right-arrow'></i></a>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
        </section> 
    )
}
export default Description;