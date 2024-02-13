import './App.css';
import Carousel from './components/slider';
import Jumbotrons from './components/jumbotrons';
import Cards from './components/cards';
import Figure from './components/figure';

import Footer from './components/footer';


import logo from './assets/icons/ЛОГО.svg';
import location from './assets/icons/Group 8810.svg';
import phone from './assets/icons/Vector.svg';
import time from './assets/icons/Group 8810.svg';
import basket from './assets/icons/Group 8811.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img id='logo_img' src={logo} alt='logo' />
          <div className='location'>
            <img id='location_icon' src={location} alt='location'/>
            <span>
              Тамбов
            </span>
          </div>
          <div className='call'>
            <img id='phone_icon' src={phone} alt='phone'/>
            <span>+7 (915) 660 09-09</span>
          </div>
          <div className='time'>
            <img id='time_icon' src={time} alt='time'/>
            <span> 09:00-21:00</span>
          </div>
        </div>

        <Navbar data-bs-theme="light" className='navigation'>
        <Container>
          <Nav className="me-auto navbar">
            <Nav.Link href="#menu">Меню ресторана</Nav.Link>
            <Nav.Link href="#lunch">Бизнес-ланч</Nav.Link>
            <Nav.Link href="#detox">Детокс</Nav.Link>
            <Nav.Link href="#portion">Рационы</Nav.Link>
          </Nav>
          
        </Container>
         <div className='basket'>
        <img id='basket_icon' src={basket} alt='basket'/>
        <a href='#basket'>Корзина</a>
             </div>
      </Navbar>
      </header>
      <main className='main'>
        <Carousel/>
        <Jumbotrons/>
        <Cards/>
        <Figure/>
      </main>
      <footer>
        <Footer/>      
      </footer>
    </div>
  );
}

export default App;
