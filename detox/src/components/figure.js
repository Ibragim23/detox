import React from 'react'
import Figure from 'react-bootstrap/Figure'

import imgFigure from '../assets/imgs/Frame 10.png'

function figure() {
  return (
    <div className='figures'>
  <Figure className='figureOne'>
      <Figure.Image
      width={579}
      height={466}
        src={imgFigure}
      />
    
      <Figure.Caption className='figureText'>
      <h1 className='figureTittle'>О нас</h1><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, neque, et leo nulla nisl. Neque parturient elementum habitasse etiam nec. Fermentum justo nam nibh vitae pellentesque integer. Imperdiet habitant tortor est amet tortor viverra. Nulla eget commodo, adipiscing arcu in et risus in.
<br/><br/>
Cras eu molestie consectetur amet at euismod. Nunc elementum lorem pharetra cursus risus eu. Ac feugiat arcu etiam eget sem urna tincidunt lacus. Nec morbi ultrices nulla accumsan adipiscing. Elementum sagittis eu placerat non molestie luctus gravida. Risus laoreet nunc lectus orci. Vitae at augue sagittis. Sed faucibus ultrices elementum faucibus varius leo, vitae. Molestie semper habitant varius eleifend nisi faucibus. 


      </Figure.Caption>
    </Figure>
    <Figure className='figureTwo'>
    <Figure.Caption className='figureText'>
      <h1 className='figureTittle'>Условия ДОСТАВКи</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, neque, et leo nulla nisl. Neque parturient elementum habitasse etiam nec.
 Fermentum justo nam nibh vitae pellentesque integer. Imperdiet habitant tortor est amet tortor viverra.</p>
       <button className='btn_connect'>
        Связаться с нами
       </button>
       </Figure.Caption>
    <Figure.Caption>
    <div style={{
        position: 'relative',
        overflow: 'hidden'
        }}>
        <a href="https://yandex.ru/maps/13/tambov/?utm_medium=mapframe&utm_source=maps" 
        style={{ 
            color: '#eee',
            position: 'absolute',
            top: '0px'
        }}>Тамбов</a>
        <a href="https://yandex.ru/maps/13/tambov/?ll=41.400827%2C52.744147&utm_medium=mapframe&utm_source=maps&z=11.31" 
        style={{
            color: '#eee',
            fontsize: '12px',
            position: 'absolute',
            top: '14px'
            }}>Тамбов — Яндекс Карты</a>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=41.400827%2C52.744147&z=11.31" 
         width="582" 
        height="468" 
        frameborder="1" 
        allowfullscreen='true' 
        style={{ position: "relative",
        marginTop: "1em", marginLeft: "5%", marginRight: "5%" }}>
            </iframe>
            </div>
       </Figure.Caption>
    </Figure>
    
    </div>
  )
}

export default figure