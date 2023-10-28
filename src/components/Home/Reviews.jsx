const Reviews = () => {
    return( 
        <section id="reviews">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <div className="ReviewContainer">
            <div className="ReviewHeader">
                <h1>Reviews</h1>
            </div>

            <div className="Reviews">

                <div className="Review-">
                    <div className="ReviewImage">
                        <img src="/images/review/rv1.jpg"></img>
                    </div> 
                    <div className="ReviewContent">
                        <h1>Great Food!</h1>
                        <div className="Stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <span>(5)</span>
                        </div>

                        <div>
                            <p></p>
                        </div>

                        <div className="Name-Customer">
                            <h1>David Abyur</h1>
                            <h2>Food Critic</h2>
                        </div>
                    </div> 
                </div>

                <div className="Review-">
                    <div className="ReviewImage">
                        <img src="/images/review/rv2.jpg"></img>
                    </div>
                    <div className="ReviewContent">
                        <h1>Tasty Burgers!</h1>
                        <div className="Stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <span>(5)</span>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div className="Name-Customer">
                            <h1>Holly Hopkins</h1>
                            <h2>Food Enjoyer</h2>
                        </div>
                    </div> 
                </div>

                <div className="Review-">
                    <div className="ReviewImage">
                        <img src="/images/review/rv3.jpg"></img>
                    </div>
                    <div className="ReviewContent">
                        <h1>Tasty!</h1>
                        <div className="Stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <span>(5)</span>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div className="Name-Customer">
                            <h1>Jenny Castillo</h1>
                            <h2>Food Enjoyer</h2>
                        </div>
                    </div> 
                </div>

                <div className="Review-">
                    <div className="ReviewImage">
                        <img src="/images/review/rv4.jpg"></img>
                    </div>
                    <div className="ReviewContent">
                        <h1>Best Glizzys!</h1>
                        <div className="Stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <span>(5)</span>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div className="Name-Customer">
                            <h1>Kaley Atkin</h1>
                            <h2>Food Enjoyer</h2>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
            
    </section>
     )
}
export default Reviews;