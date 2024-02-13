import React from 'react'
import footerLogo from '../assets/icons/ЛОГО-footer.svg'
import footerInst from '../assets/icons/instagram-logo-svgrepo-com 1.svg'

function footer() {
  return (
    <>
     <div className='footer'>
      <img className='footer_logo' src={footerLogo} alt='logo'/>
      <div className='footer_table'>
        <a href='1'>Контакты</a>
        <a href='1'>О компании</a>
      </div>
      <div className='footer_table'>
        <a href='1'>Оплата</a>
        <a href='1'>Доставка</a>
      </div>
      <div className='footer_table'>
        <a href='1'>Публичная оферта</a>
        <a href='1'>Политика конфидиенциальности</a>
      </div>
      </div>   
           <div className='footer_underline'>
      <div className='icons_area'>
        <span>© 2022</span>
        <img src={footerInst} alt='inst'/>
      </div>
      <p>Мы используем cookies для быстрой и удобной работы сайта. Продолжая пользоваться сайтом, вы принимаете условия обработки персональных данных</p>
            </div>
    </>
  )
}

export default footer