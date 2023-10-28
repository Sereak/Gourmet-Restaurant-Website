import './Menu.css';
import React, { useState } from 'react';
import Categories from './components/Menu/Categories';
import items from './components/Menu/data';
import MenuBase from './components/Menu/MenuBase';
import NavBar from './components/Nav/Navbar';
import Footer from './components/Footer';
const allCategories = ['all', ...new Set(items.map(item => item.category))];

function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    console.log('click', category);
    if(category =='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <div className="Page">
        <NavBar/>
        <div className='MenuContainer'>
          <section className="menu section">
            <div className="title">
              <h2>OUR MENU</h2>
              <div className="underline" />
              <h3>(All meals come with fries)</h3>
              <h4>Drinks are an extra $1.99</h4>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <MenuBase items={menuItems} />
          </section>
          <a href="#" class="scroll" id="scroll"><i class='bx bx-up-arrow-alt' ></i></a>
          <Footer/>
        </div>
    </div>
    </main>
  );
}

export default Menu;