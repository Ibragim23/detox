import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


import cardImgOne from '../assets/imgs/Frame 11.png';
import cardImgTwo from '../assets/imgs/Frame 12.png';
import cardImgThree from '../assets/imgs/Frame 13.png';
import cardImgFour from '../assets/imgs/Frame 14.png';


function cards() {
  return (
    <div className='cards'>
        <h1>Рационы</h1>
 <CardGroup>
      <Card>
        <Card.Img variant="top" src={cardImgOne}/>
        <Card.Body>
          <Card.Title className='cardTitle'>Баланс</Card.Title>
          <Card.Text>
          Здоровое питание на каждый день
для тех, кто  заботится о своем ежедневном рационе.
          </Card.Text>
          <small className="cal">~1 800 ккал</small>
          <div className='card_price'>
          <span>1 190 ₽</span>
          <Button variant="success" className='btn_choose'>Выбрать</Button>{' '} 
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={cardImgTwo}/>
        <Card.Body>
          <Card.Title className='cardTitle'>ЛАЙТ</Card.Title>
          <Card.Text>
          Четырехразовое меню для похудения, поддержания формы и создания рельефа.
          </Card.Text>
          <small className="cal">~1 400 ккал</small>
          <div className='card_price'>
          <span>1 050 ₽</span>
          <Button variant="success" className='btn_choose'>Выбрать</Button>{' '} 
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={cardImgThree}/>
        <Card.Body>
          <Card.Title className='cardTitle'>Супер лайт</Card.Title>
          <Card.Text>
          Быстрое похудение и поддержание формы. Трехразовое меню для быстрого снижения веса без спорта.
          </Card.Text>
          <small className="cal">~900 ккал</small>
          <div className='card_price'>
          <span>890 ₽</span>
          <Button variant="success" className='btn_choose'>Выбрать</Button>{' '} 
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={cardImgFour}/>
        <Card.Body>
          <Card.Title className='cardTitle'>масс</Card.Title>
          <Card.Text>
          Сбалансированное питание для поддержания оптимальной формы при тренировках.
          </Card.Text>
          <small className="cal">~1 800 ккал</small>
          <div className='card_price'>
          <span>1 490 ₽</span>
          <Button variant="success" className='btn_choose'>Выбрать</Button>{' '} 
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}

export default cards