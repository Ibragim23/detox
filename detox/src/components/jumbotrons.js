import React from 'react'

import iconOne from '../assets/icons/Frame 74.svg'
import iconTwo from '../assets/icons/Frame 75.svg'
import iconThree from '../assets/icons/Frame 76.svg'
import iconFour from '../assets/icons/Frame 77.svg'


function 
jumbotrons() {
  return (
    <div className='jumbotrons'>
        <div className='jumbotron_one'>
            <img src={iconOne} alt='natural products'/>
            <p>Используем только натуральные продукты, блюда без консервантов и искусственных добавок.
</p>
        </div>
        <div className='jumbotron_one'>
            <img src={iconTwo} alt='natural products'/>
   <p>Сбалансированное здоровое меню, соответствующее КБЖУ
</p>
        </div>
        <div className='jumbotron_one'>
            <img src={iconThree} alt='natural products'/>
            <p>По желанию подберем программу тренировок и составим индивидуальное КБЖУ для любого уровня подготовки.
</p>
        </div>
        <div className='jumbotron_one'>
            <img src={iconFour} alt='natural products'/>
            <p>Бесплатная доставка, чтобы сэкономить массу времени и сил для более важных и приятных дел.</p>
        </div>
    </div>
  )
}


export default jumbotrons