import './Home.css';
import Description from './components/Home/Description';
import MainSection from './components/Home/MainSection';
import PopularMenu from './components/Home/PopularMenu';
import Reviews from './components/Home/Reviews';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="Page">
        <Navbar/>
        <div className='HomeContainer'>
          <MainSection/>
          <div className='Content'>
            <Description/>
            <PopularMenu/>
            <Reviews/>
          </div>
          <a href="#" class="scroll" id="scroll"><i class='bx bx-up-arrow-alt' ></i></a>
          <Footer/>
        </div>
    </div>
  );
}

export default Home;
