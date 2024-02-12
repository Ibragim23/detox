import Carousel from 'react-bootstrap/Carousel';

import SlideOne from '../assets/imgs/Frame 73 (1).png';


function slider() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src={SlideOne} alt='slide' text="First slide" />
        <Carousel.Caption className='carouselCaption'>
          <h3 className='carouselTittle'><span>Детокс-</span> программа</h3>
          <p className='carouselText'>от комплексного очищения от <span>1099</span> руб.</p>
          <button className='btnCarousel'>Заказать</button> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SlideOne} alt='slide' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </>
  );
}

export default slider;