import React from "react"
import "./FooterMain.scss"

const FooterMain = () => {
   return (
        <React.Fragment>
            <div class="navigation__logo">
                <div class="logo__icon"></div>
                <div class="logo__text navigation" >Delivery Food</div>
            </div>
             <div class="footer__desc">
                <div>Ресторанам</div>
                <div>Курьерам</div>
                <div>Пресс-центр</div>
                <div>Контакты</div>
            </div>
            <div class="mes">
                <div class="inst size"></div>
                <div class="face size"></div>
                <div class="vk size"></div>
            </div>
        </React.Fragment>
   )
}

export default FooterMain