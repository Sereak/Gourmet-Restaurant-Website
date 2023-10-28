const PopularMenu = () => {
    return(
        <section id="popularmenu">
            <div className="PopularMenu">
                <div className="PopularMenuHeader"> 
                    <h1>Popular Menu Items</h1>
                    <h2>All meals are served with fries.</h2>
                </div>
                <div className="MenuItemsContainer">
                    <div className="MenuItems">
                        <div className="Menu-Item">
                            <h1>Burger Buddies Meal</h1>
                            <img src="/images/menu/item-3.jpg"/>
                            <div>
                                <p>Burgers for Buddies</p>
                                <p> $35.99</p>
                            </div>
                        </div>

                        <div className="Menu-Item">
                            <h1>Simple Chicken Meal</h1>
                            <img src="/images/menu/item-5.jpg"/>
                            <div>
                                <p>Simplest Sandwhich</p>
                                <p> $14.99</p>
                            </div>
                        </div>

                        <div className="Menu-Item">
                            <h1>ATW Burger Meal</h1>
                            <img src="/images/menu/item-2.jpg"/>
                            <div>
                                <p>Supreme Burger</p>
                                <p> $17.99</p>
                            </div>
                        </div>

                        <div className="Menu-Item">
                            <h1> Chizzy Meal</h1>
                            <img src="/images/menu/item-10.jpg"/>
                            <div>
                                <p>Glizzy with Chili</p>
                                <p> $15.99</p>
                            </div>
                        </div>    
                    </div>
                    
                    <div className="PopularMenuButton">
                        <a href="/menu" className="MenuButton2"> Menu </a> 
                    </div>  
                </div>
            </div>  
        </section> 
    )
}
export default PopularMenu;